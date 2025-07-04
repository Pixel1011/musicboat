import { ActionRowBuilder, ButtonBuilder, ButtonInteraction, ButtonStyle, ComponentType, EmbedBuilder, Interaction, Message, MessageReaction, ReadonlyCollection, Snowflake, TextChannel, User, VoiceChannel } from "discord.js";
import type { musicBot } from "../client";
import { ArgOption, ArgType, Command } from "../Structures/Command";
import { Track, Tracks } from "../Structures/Search";
import { musicHelper } from "../utils/musicHelper";
import type { UnifiedData } from "../utils/SlashUnifier";
import { BPlayer } from "../Structures/Song";
import { Queue } from "../utils/queue";
import { getPagesRow } from "../utils/interactions";

function isInt(value) {
  return !isNaN(value) && parseInt(value) == value && !isNaN(parseInt(value, 10));
}

export default class SearchCmd extends Command {
  constructor() {
    super();
    this.name =  "search";
    this.description =  "Searches from Youtube for a song via your query and returns the top 10 results.";
    this.aliases =  ["find"];
    this.hide =  false;
    this.arguments =  [
      new ArgOption("term", "Term to search from youtube", true, ArgType.STRING)
    ];
  }

  async run(client: musicBot, data: UnifiedData, args: string[]) {
    const music = new musicHelper(client, data.guild.id);
    let toSearch = args.join(" ");
    // basically rob top half of play command
    let vchannel = data.member.voice.channel as VoiceChannel;
    let player: BPlayer = music.getPlayer();

    // check if user in a vc
    if (!vchannel) {
      return data.send(":x: **You have to be in a voice channel to use this command.**");
    }
    // check if user in same vc
    if ((vchannel.id != data.guild.members.me.voice.channelId) && data.guild.members.me.voice.channelId != null) {
      return data.send(":x: **You have to be in the same voice channel to use this command**");
    }

    // check perms to join channel
    if (!vchannel.joinable) {
      return data.send(`:person_gesturing_no: **No permission to join** \`\`${vchannel.name}\`\``);
    }
    // check perms to speak in channel
    if (!vchannel.speakable) {
      return data.send(`:person_gesturing_no: **No permission to speak in** \`\`${vchannel.name}\`\``);
    }

    await data.send(`**Searching** :mag_right: \`\`${toSearch}\`\``);
    let results = await music.search(toSearch, "ytsearch:");
    //let result = results.tracks[0];
    if (results.loadType == "error") {
      return await data.channel.send(`:x: **load failed: debug:** ${await client.logger.logToHaste(JSON.stringify(require("util").inspect(results.data)))}`);
    }

    if (results.loadType == "empty") {
      return await data.channel.send(":x: **No Matches**");
    }

    let tracks: Tracks;
    if (results.loadType == "playlist") {
      tracks = results.data.tracks;
    }else if (results.loadType == "track") {
      tracks = [results.data];
    } else {
      tracks = results.data;
    }

    let pages = Math.ceil(tracks.length / 10);
    if (pages == 0) pages = 1;

    let page = 1; // was gonna add it as an argument but having it as an argument and also having options to go between pages is silly
    if(isNaN(page)) page = 1;
    if (page > pages) return data.send(`:x: **There is no page \`\`${page}\`\`**`);

    let embed = await this.getEmbed(client, data, tracks, page, pages, toSearch);
    let rightDisabled = false;
    if (pages == 1) rightDisabled = true;
    let disabledMap = new Map<string, boolean>([["cancel", false], ["left", true], ["right", rightDisabled]]);
    let row = getPagesRow(disabledMap);
    let original = await data.send({embeds: [embed], components: [row.toJSON()]});
    
    let thisgetembed = this.getEmbed;
    let editorfunc = async function(message: Message) {
      if (message.channel.id != data.channel.id) return;
      if (message.author.id != data.author.id) return;
      let cont = message.content;
      if (isInt(cont)) {
        let idx = parseInt(cont) - 1;
        if (idx < 0 || idx > tracks.length) {
          message.react("❌");
          return;
        }
        let trackSelected = tracks[idx];
        // more play command robbery.. kindof
        // Join
        // check if not in vc already and get player
    
        if (!data.guild.members.me.voice.channelId) {
          player = await music.join(vchannel.id);
          data.send(`:thumbsup: **Joined** \`\`${vchannel.name}\`\` **and bound to** <#${data.channel.id}>`); // store channel somewhere for queues
        } else {
          player = await music.getPlayer();
          if (!player) player = await music.join(vchannel.id);
        }
    
        if (!player.boundChannel) {
          player.boundChannel = data.channel.id;
        }
    
        if (!player.queue) {
          player.queue = new Queue();
        }
    
        if (!player.queue.currentSong) {
          player.skips = [];
          await player.queue.add(trackSelected, message.author);
          music.setVolume(100);
          player.play(trackSelected);
          data.channel.send(`**Playing** :notes: \`\`${trackSelected.info.title}\`\` - Now!`);
          
          // register player events if not already
          music.registerEvents();
        } else {
          // if is already playing
    
          await player.queue.add(trackSelected, data.author);
          let song = player.queue.songs.at(-1);
          // embed
          let avatarURL = song.requester.avatarURL({size: 4096});
    
          let songLength = music.time(song.length);
    
          let timeTillPlaying = 0;
    
          player.queue.songs.forEach(sng => {
            timeTillPlaying = timeTillPlaying + sng.length;
          });

          timeTillPlaying = timeTillPlaying + player.queue.currentSong.length - player.position;
          // time to play whole queue including whats currently playing
          timeTillPlaying = timeTillPlaying - song.length;

          let embed = new EmbedBuilder();
          embed.setAuthor({name: "Added to queue", iconURL: avatarURL});
          embed.setDescription(`[**${song.title}**](${song.url})`);
          embed.addFields([
            {name: "Channel", value: song.channel, inline: true},
            {name: "Song Duration", value: songLength, inline: true},
            {name: "Estimated time until playing", value: music.time(timeTillPlaying), inline: true},
            {name: "Position in queue", value: `${player.queue.songs.length}`, inline: true}
          ]);
          embed.setThumbnail(song.thumbnail);
          embed.setColor(0x202225);
          data.channel.send({embeds: [embed]});
        }
        music.registerInactivityStriker(vchannel);
        // sometimes this ends up joining so fast that player.voice isnt set correctly so upon reload it stops working as it doenst have a vcid
        setTimeout(() => {
          music.save();
        }, 500);
        client.off("messageCreate", editorfunc);
        original.edit({components: []});
      }
    };
    
    client.on("messageCreate", editorfunc);
    let filter = async (inter: ButtonInteraction) => inter.customId !== undefined && inter.user.id === data.author.id && inter.message.id == original.id;
    let compCollector = original.createMessageComponentCollector<ComponentType.Button>({ filter: filter, time: 300000});
    
    compCollector.on("collect", async (inter: ButtonInteraction) => {
      let id = inter.customId;

      if (id == "cancel") {
        client.off("messageCreate", editorfunc);
        original.edit({components: []});
        await inter.reply({content: "✅ Cancelled search.", flags: ["Ephemeral"] });
        inter.ephemeral = true;
        return;
      } else

      if (id == "right") {
        page++;
        // spam protection
        if (page > pages) page = pages;
        
        if (page + 1 > pages) {
          disabledMap.set("right", true);
        }
        
        disabledMap.set("left", false);
        
        let row = getPagesRow(disabledMap).toJSON();
        let newembed = await thisgetembed(client, data, tracks, page, pages, toSearch);
        
        original.edit({embeds: [newembed], components: [row]});
        
        await inter.deferUpdate();
      } else
        
      if (id == "left") {
        page--;
        // spam protection
        if (page < 1) page = 1;

        if (page - 1 < 1) {
          disabledMap.set("left", true);
        }

        disabledMap.set("right", false);

        let row = getPagesRow(disabledMap).toJSON();

        let newembed = await thisgetembed(client, data, tracks, page, pages, toSearch); 
        original.edit({embeds: [newembed], components: [row]});

        await inter.deferUpdate();
      } 
    });

    compCollector.on("end", (collected: ReadonlyCollection<Snowflake, Interaction>) => {
      client.off("messageCreate", editorfunc);
      original.edit({components: []}); 
    });


  }

  static async songString(song: Track) {
    let songname = song.info.title;
    let link = song.info.uri;
    let channel = song.info.author;

    let timeToPlay = song.info.length;
    let timeToPlayMin = Math.floor(timeToPlay / 1000 / 60);
    let timeToPlaySec = Math.floor(timeToPlay / 1000 - (timeToPlayMin * 60)).toLocaleString("en-GB", {minimumIntegerDigits: 2});
    let time = `${timeToPlayMin}:${timeToPlaySec}`;
    if (song.info.isStream) time = "LIVE";
  
    return `[${songname}](${link}) | \`${time} by ${channel}\``;
  }

  async getEmbed(client: musicBot, data: UnifiedData, tracks: Tracks, page: number, pages: number, toSearch: string) {
    let desc: string[] = [];
    for (let i = (page * 10) - 10; i < (page * 10); i++) {
      let song = tracks[i];
      if (!song) break; 
      desc.push("\n" + `\`\`${i+1}.\`\` ` + await SearchCmd.songString(song));
    }
    desc.push("\n**Type # of song to play**");

    let embed = new EmbedBuilder();
    embed.setTitle(`Search results for ${toSearch}`);
    embed.setURL(client.config.website);
    embed.setDescription(desc.join("\n"));
    embed.setFooter({
      text: `Page ${page}/${pages}`,
      iconURL: data.author.avatarURL({size:2048})
    });
    return embed;
  }
  
}

// maybe add stuff thats shared with play command to musichelper :aou: