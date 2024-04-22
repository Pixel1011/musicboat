/* eslint-disable no-unused-vars */
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
import { LoadTracksResponse, LoadType } from "@lavaclient/types/rest";
import { BPlayer } from "../Structures/Song";
import { Item } from "@lavaclient/spotify";


async function run(client: musicBot, data: UnifiedData, args: string[]) {
/*  let music = new musicHelper(client, data.guild.id);
  let vchannel = data.member.voice.channel as VoiceChannel;
  let lavalink = client.lavalink;
  let player: BPlayer;

  // check if given search term and if not, see if a player already exists and see if user is trying to unpause

  // check if player doesnt exist, or if there is no queue created or, if there is no current song
  if (!(lavalink.players.get(data.guild.id) as BPlayer) || !(lavalink.players.get(data.guild.id) as BPlayer).queue || !(lavalink.players.get(data.guild.id) as BPlayer).queue.currentSong) {
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
      if (lavalink.players.get(data.guild.id).paused) {
        await lavalink.players.get(data.guild.id).resume();
        data.send(":play_pause: **Resuming** :thumbsup:");
        return;
      } else {
        // otherwise tell user its already playing or theyre not using command properly. not sure which
        return data.send(":x: **The player is not paused**");
        // let embed = new EmbedBuilder();    
        // embed.setTitle(":x: Invalid usage");
        // embed.setDescription(`${client.prefix}play [Link or query]`);
        // return data.send({embeds: [embed]});
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
    player = await lavalink.players.get(data.guild.id);
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
  let {result, results, isPlaylist, tracks, playlistName, playlistThumb, totalTracks } = await music.parseSearch(args);

  // nothing found
  if (!result) {
    return data.channel.send(":x: **No Matches**");
  }
  if (!result.info.spotify) {
    results = results as LoadTracksResponse;
    if (results.loadType == LoadType.NoMatches) {
      return data.channel.send(":x: **No Matches**");
    } else
    // failed to load
    if (results.loadType == LoadType.LoadFailed) {
      return data.channel.send(`:x: **load failed: debug:** ${await client.logger.logToHaste(JSON.stringify(results))}`);
    }
  } else {
    results = results as Item;
    // well, if its spotify, it shouldnt fail to load (especially as spotify search isnt a thing), and if it does, i cant produce that result so i cant create a condition for it
    // so we do nothing and continue on as nothing bad has occured while praying
  }



  
  // play
  // if nothing in queue/nothing playing
  if (player.queue.currentSong == null || player.queue.currentSong == undefined) {
    player.skips = [];
    let success = await player.queue.add(result, data.author);
    if (!success) {
      return data.channel.send(":x: **This video cannot be played**");
    }

    // if playlist with more than 1 song
    if (isPlaylist && tracks[1]) {
      tracks.shift();

      for (let i in tracks) {
        let t = tracks[i];
        if (!t) break;
        await player.queue.add(t, data.author);
      }
      // playlist embed
      let avatarURL = data.author.avatarURL({size: 4096});
      let timeTillPlaying = "Now!"; // nothing else in queue

      let embed = new EmbedBuilder();
      embed.setAuthor({name: "Playlist added to queue", iconURL: avatarURL});
      embed.setDescription(`**${playlistName}**`);
      embed.addFields([
        {name: "Estimated time until playing", value: timeTillPlaying, inline: true},
        {name: "Position in queue", value: "1", inline: true},
        {name: "Enqueued", value: `\`\`${totalTracks}\`\` songs`, inline: true}
      ]);
      embed.setThumbnail(playlistThumb);
      embed.setColor(0x202225);
      data.channel.send({embeds: [embed]});

    }
    // nothing playing and single result
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

    let success = await player.queue.add(result, data.author);
    if (!success) {
      return data.channel.send(":x: **This video cannot be played**");
    }


    // adding playlist
    if (isPlaylist && tracks[0]) {
      tracks.forEach(async t => {
        await player.queue.add(t, data.author);
      });
      // playlist embed
      let avatarURL = data.author.avatarURL({size: 4096});
      let timeTillPlaying = "Now!"; // nothing else in queue

      let embed = new EmbedBuilder();
      embed.setAuthor({name: "Playlist added to queue", iconURL: avatarURL});
      embed.setDescription(`**${playlistName}**`);
      embed.addFields([
        {name: "Estimated time until playing", value: `${timeTillPlaying}`, inline: true},
        {name: "Position in queue", value: `${player.queue.songs.length + 1}`, inline: true},
        {name: "Enqueued", value: `\`\`${totalTracks}\`\` songs`, inline: true}
      ]);

      embed.setThumbnail(playlistThumb);
      embed.setColor(0x202225);
      data.channel.send({embeds: [embed]});

    } else { 


      // adding 1 song
      let song = player.queue.songs.at(-1);
      // embed
      let avatarURL = song.requester.avatarURL({size: 4096});

      let songLength = music.time(song.length);

      let timeTillPlaying = 0;

      player.queue.songs.forEach(sng => {
        timeTillPlaying = timeTillPlaying + sng.length;
      });

      timeTillPlaying = timeTillPlaying + (player.queue.currentSong.length - player.position);
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
  }


  // inactive timer
  if (player.striker == undefined) {
    player.striker = {
      guild: data.guild.id,
      strikes: 0,
      interval: this
    };

    let interval = setInterval(function () {
      // really gotta rewrite this and just set to player like holy it keeps failing
      if (player.playing && vchannel.members.size > 1) return player.striker.strikes = 0;

      player.striker.strikes++;

      if (player.striker.strikes == 10) {
        music.destroyPlayer();
      }
    }, 2 * 60 * 1000); // every 2 mins, 10 strikes = 20mins

    player.striker.interval = interval;
  }*/
  return data.send("Bot borked :p");
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