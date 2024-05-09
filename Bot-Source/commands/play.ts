/* eslint-disable no-useless-escape */
import type { VoiceChannel } from "discord.js";
import type { musicBot } from "../client";
import type { UnifiedData } from "../utils/SlashUnifier";
import { musicHelper } from "../utils/musicHelper";
import { EmbedBuilder } from "discord.js";
import { Queue } from "../utils/queue";
import { ArgOption, ArgType } from "../Structures/Command";
import { TrackEnd } from "../events/PlayerEvents/trackEnd";
import { TrackStuck } from "../events/PlayerEvents/trackStuck";
import { TrackException } from "../events/PlayerEvents/trackException";
import { BPlayer } from "../Structures/Song";


async function run(client: musicBot, data: UnifiedData, args: string[]) {
  let music = new musicHelper(client, data.guild.id);
  let vchannel = data.member.voice.channel as VoiceChannel;
  let player: BPlayer = music.getPlayer();

  // check if given search term and if not, see if a player already exists and see if user is trying to unpause

  // check if player doesnt exist, or if there is no queue created or, if there is no current song
  if (!player || !player.queue || !player.queue.currentSong) {
    // if no search term, return embed
    if (!args.join(" ")) {
      let embed = new EmbedBuilder();
      embed.setTitle(":x: Invalid usage");
      embed.setDescription(`\n${client.prefix}play [Link or query]`);
      return data.send({
        embeds: [embed]
      });
    }
  } else {
    // there is a player but no args so unpause
    if (!args.join(" ")) {
      if (player.paused) {
        await player.resume();
        data.send(":play_pause: **Resuming** :thumbsup:");
        return;
      } else {
        return data.send(":x: **The player is not paused**");
      }
    }
  }

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

  // Join
  // check if not in vc already and get player

  if (!data.guild.members.me.voice.channelId) {
    player = await music.join(vchannel.id);
    data.send(`:thumbsup: **Joined** \`\`${vchannel.name}\`\` **and bound to** <#${data.channel.id}>`); // store channel somewhere for queues
  } else {
    player = await music.getPlayer();
    if (!player) player = await music.join(vchannel.id);
  }

  if (!player.queue) {
    player.queue = new Queue(client);
  }



  // search

  // for neater replies
  if (!data.replied) {
    await data.send(`:musical_note: **Searching** :mag_right: \`\`${args.join(" ")}\`\``);
  } else {
    await data.channel.send(`:musical_note: **Searching** :mag_right: \`\`${args.join(" ")}\`\``);
  }
  
  client.logger.log(`Searching: ${args.join(" ")}`);
  let parsed = await music.parseSearch(args);
  let result = parsed.result;
  
  // nothing found
  if (parsed.error) {
    return data.channel.send(`:x: **load failed: debug:** ${await client.logger.logToHaste(JSON.stringify(parsed.exception))}`);
  }
  if (!result) {
    return data.channel.send(":x: **No Matches**");
  }
  
  
  // play
  // if nothing in queue/nothing playing
  if (!player.queue.currentSong) {
    player.skips = [];
    await player.queue.add(result, data.author);
    
    // if playlist
    if (parsed.isPlaylist) {
      let totalTracks = await music.addPlaylist(parsed.tracks, data);
      let timeTillPlaying = "Now!"; // nothing else in queue
      let position = "1";
      await music.sendPlaylistEmbed(data, timeTillPlaying, totalTracks, position, parsed);
    }
    music.setVolume(100);
    // nothing playing
    player.play(result);
    data.channel.send(`**Playing** :notes: \`\`${result.info.title}\`\` - Now!`);
    
    // register player events if not already
    if (!player.eventsCreated) {
      let EndClass = new TrackEnd(music);
      player.on("trackEnd", async (track, reason) => EndClass.handle(track, reason));
      
      let ExceptionClass = new TrackException(music);
      player.on("trackException", (track, error) => ExceptionClass.handle(track, error));
      
      let StuckClass = new TrackStuck(music);
      player.on("trackStuck", (track, threshold) => StuckClass.handle(track, threshold));
      player.eventsCreated = true;
    }
  } else {     
    // if is already playing
    
    await player.queue.add(result, data.author);
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

    // adding playlist
    if (parsed.isPlaylist) {
      let totalTracks = await music.addPlaylist(parsed.tracks, data);
      await music.sendPlaylistEmbed(data, music.time(timeTillPlaying), totalTracks, player.queue.songs.length + 1, parsed);
    } else {
      // not playlist (single song), already added to queue so just send embed
      
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
  }
  
  
  // register inactive timer if not already
  if (player.striker == undefined) {
    player.striker = {
      guild: data.guild.id,
      strikes: 0,
      interval: this
    };

    let interval = setInterval(function () {
      if (player.playing && vchannel.members.size > 1) return player.striker.strikes = 0;

      player.striker.strikes++;

      if (player.striker.strikes == 10) {
        music.destroyPlayer();
      }
    }, 2 * 60 * 1000); // every 2 mins, 10 strikes = 20mins

    player.striker.interval = interval;
  }
}

export const data = {
  name: "play",
  description: "Plays a song with the given name or url.",
  aliases: ["p"],
  hide: false, // hide from help command
  arguments: [
    new ArgOption("term", "Term to be searched from youtube or a youtube/spotify url to video/playlist", false, ArgType.STRING)
  ],
  run: run
};