import { Guild, EmbedBuilder, ButtonInteraction, ComponentType, ReadonlyCollection, Snowflake, Interaction } from "discord.js";
import type { musicBot } from "../client";
import { musicHelper } from "../utils/musicHelper";
import type { BPlayer, QueueSong } from "../Structures/Song";
import type { UnifiedData } from "../utils/SlashUnifier";
import { ArgOption, ArgType, Command } from "../Structures/Command";
import { getPagesRow } from "../utils/interactions";

export default class QueueCmd extends Command {
  constructor() {
    super();
    this.name =  "queue";
    this.description =  "Shows the server's music queue";
    this.aliases =  ["q"];
    this.hide =  false;
    this.arguments =  [
      new ArgOption("page", "Page number to list (Default: 1)", false, ArgType.INTEGER)
    ]; 
  }

  async run(client: musicBot, data: UnifiedData, args: string[]) {
    const music = new musicHelper(client, data.guild.id);
    if (!await music.check(data, true, true, false, false)) return;
    let player = music.getPlayer();

    let pages = Math.ceil(player.queue.songs.length / 10);
    if (pages == 0) pages = 1;
    let page = 1;
    if(args.join(" ")) page = Number(args.join(" "));
    if(isNaN(page)) page = 1;
    if (page > pages) return data.send(`:x: **There is no page \`\`${page}\`\`**`);

    let rightDisabled = false;
    if (pages == 1) rightDisabled = true;
    let leftDisabled = false;
    if (page == pages) leftDisabled = true;
    let disabledMap = new Map<string, boolean>([["cancel", false], ["left", leftDisabled], ["right", rightDisabled]]);
    let row = getPagesRow(disabledMap, false);
    let original = await data.send({embeds: [this.getEmbed(client, data, player, music, page, pages)], components: [row.toJSON()]});

    let filter = async (inter: ButtonInteraction) => inter.customId !== undefined && inter.user.id === data.author.id && inter.message.id == original.id;
    let compCollector = original.createMessageComponentCollector<ComponentType.Button>({ filter: filter, time: 300000});
    let thisgetembed = this.getEmbed;
    
    compCollector.on("collect", async (inter: ButtonInteraction) => {
      let id = inter.customId;

      if (id == "right") {
        page++;
        if (page > pages) page = pages;
        if (page + 1 > pages) {
          disabledMap.set("right", true);
        }

        disabledMap.set("left", false);
        
        let row = getPagesRow(disabledMap, false).toJSON();
        let newembed = thisgetembed(client, data, player, music, page, pages);
        
        original.edit({embeds: [newembed], components: [row]});
        
        await inter.deferUpdate();
      } else
        
      if (id == "left") {
        page--;
        if (page < 1) page = 1;

        if (page - 1 < 1) {
          disabledMap.set("left", true);
        }
          
        disabledMap.set("right", false);
          
        let row = getPagesRow(disabledMap, false).toJSON();
          
        let newembed = thisgetembed(client, data, player, music, page, pages);
        original.edit({embeds: [newembed], components: [row]});

        await inter.deferUpdate();
      } 
    });

    compCollector.on("end", (collected: ReadonlyCollection<Snowflake, Interaction>) => {
      original.edit({components: []}); 
    });
  }

  static songString(song: QueueSong, guild: Guild) {
    let songname = song.title;
    let link = song.url;

    let timeToPlay = song.length;
    let timeToPlayMin = Math.floor(timeToPlay / 1000 / 60);
    let timeToPlaySec = Math.floor(timeToPlay / 1000 - (timeToPlayMin * 60)).toLocaleString("en-GB", {minimumIntegerDigits: 2});
    let time = `${timeToPlayMin}:${timeToPlaySec}`;
    if (song.isStream) time = "LIVE";
    let displayName = guild.members.cache.get(song.requester.id).displayName;

    return `[${songname}](${link}) | \`${time} Requested by: ${displayName}\``;
  }

  getEmbed(client: musicBot, data: UnifiedData, player: BPlayer, music: musicHelper, page: number, pages:number) {
    let currentSong = player.queue.currentSong;
    let desc = [];

    if (page == 1) {
      desc.push("__Now Playing:__");
      desc.push(QueueCmd.songString(currentSong, data.guild));
    }
    if (player.queue.songs[0]) {
      if (page == 1) desc.push("\n__Up Next:__");

      for (let i = (page * 10) - 10; i < (page * 10); i++) {
        let song = player.queue.songs[i];
        if (!song) break; 
        desc.push("\n" + `\`\`${i+1}.\`\` ` + QueueCmd.songString(song, data.guild));
      }

      let queueLength = 0;

      player.queue.songs.forEach(sng => {
        queueLength = queueLength + sng.length;
      });

      //queueLength = queueLength + (player.queue.currentSong.length - player.position);
      let text = player.queue.songs.length > 1 ? "songs" : "song";
      desc.push("\n" + `**${player.queue.songs.length} ${text} in queue | ${music.time(queueLength)} total length**`);
    }

    let loopEmote = "❌";
    if(player.loop) loopEmote = "✅";
    let queueLoopEmote = "❌";
    if(player.queueLoop) queueLoopEmote = "✅";
    
    let embed = new EmbedBuilder();
    embed.setTitle(`Queue for ${data.guild.name}`);
    embed.setURL(client.config.website);
    embed.setDescription(desc.join("\n"));
    embed.setFooter({
      text: `Page ${page}/${pages} | Loop: ${loopEmote} | Queue Loop: ${queueLoopEmote}`,
      iconURL: data.author.avatarURL({size:2048})
    });
    return embed;
  }

}