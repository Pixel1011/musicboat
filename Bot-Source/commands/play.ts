/* eslint-disable no-useless-escape */
import type { VoiceChannel } from "discord.js";
import type { musicBot } from "../client";
import { musicHelper } from "../utils/musicHelper";
import { EmbedBuilder } from "discord.js";
import { Queue } from "../utils/queue";
import type { Player } from "lavaclient";
import type { UnifiedData } from "../utils/SlashUnifier";
import { ArgOption, ArgType } from "../Structures/Command";
import { TrackEnd } from "../events/PlayerEvents/trackEnd";
import { TrackStuck } from "../events/PlayerEvents/trackStuck";
import { TrackException } from "../events/PlayerEvents/trackException";
import type { CTrack } from "../Structures/Track";
import type { Item, SpotifyPlaylist, SpotifyTrack } from "@lavaclient/spotify";
import { LoadTracksResponse, LoadType } from "@lavaclient/types/rest";


async function run(client: musicBot, data: UnifiedData, args: string[]) {
  let music = new musicHelper(client, data.guild.id);
  let vchannel = data.member.voice.channel as VoiceChannel;
  let lavalink = client.lavalink;
  let spotify = lavalink.spotify;
  let player: Player;
  let youtubeVideoRegex = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;
  let youtubePlaylistRegex =  /^.*(youtu.be\/|list=)([^#\&\?]*).*/;

  // check if given search term and if not, see if a player already exists and see if user is trying to unpause

  // check if player doesnt exist, or if there is no queue created or, if there is no current song
  if (!lavalink.players.get(data.guild.id) || !lavalink.players.get(data.guild.id).queue || !lavalink.players.get(data.guild.id).queue.currentSong) {
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
        data.send("⏯ **Resuming** 👍");
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
    return data.send(`🙅 **No permission to join** \`\`${vchannel.name}\`\``);
  }
  // check perms to speak in channel
  if (!vchannel.speakable) {
    return data.send(`🙅 **No permission to speak in** \`\`${vchannel.name}\`\``);
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
  let result: CTrack;
  let results: Item | LoadTracksResponse;
  let isPlaylist = false;
  let playlistName = "";
  let playlistThumb = "";
  let totalTracks = 0;
  let tracks: CTrack[];

  await data.send(`:musical_note: **Searching** :mag_right: \`\`${args.join(" ")}\`\``);
  client.logger.log(`Searching: ${args.join(" ")}`);

  if (spotify.isSpotifyUrl(args.join(" "))) {
    results = await music.loadSpotify(args.join(" "));

    switch (results.data.type) {
        case "track": {
          let track = results as SpotifyTrack;
          result = await track.resolveYoutubeTrack();
          result.info.url = results.data.external_urls.spotify;
          result.info.thumbnail = results.data.album.images[0].url;
          result.info.title = results.data.name;
          result.info.spotify = true;  
          break;
        }

        case "playlist": {
          isPlaylist = true;
          let playlist = results as SpotifyPlaylist;
          tracks = await playlist.resolveYoutubeTracks();
          let i = 0;
          tracks.forEach(t => {
            t.info.spotify = true;
            t.info.url = playlist.tracks[i].data.external_urls.spotify;
            t.info.thumbnail = playlist.tracks[i].data.album.images[0].url;
            t.info.title = playlist.tracks[i].data.name;
            i++;
          });
          playlistName = playlist.data.name;
          totalTracks = playlist.data.tracks.total;
          playlistThumb = playlist.data.images[0].url;
          result = tracks[0];  
          break;
        }

    }
    // else if is not spotify
  } 
  // prob put soundcloud somewhere around here
  else { 
    if (youtubeVideoRegex.test(args.join(" ")) || youtubePlaylistRegex.test(args.join(" "))) {
      results = await music.search(args.join(" "));
    } else {
      results = await music.search(args.join(" "), "ytsearch:");
    }
    
    // youtube playlist
    if (results.loadType == LoadType.PlaylistLoaded) {        
      isPlaylist = true;
      tracks = results.tracks;
      totalTracks = tracks.length;
      playlistName = results.playlistInfo.name;
      playlistThumb = await player.queue.getThumbnail(tracks[0]);

      let selectedTrack = results.playlistInfo.selectedTrack;
      if (selectedTrack == -1) selectedTrack = 0;
      result = tracks[selectedTrack];
    } else 
    // single youtube video / search result
    if (results.loadType == LoadType.TrackLoaded || results.loadType == LoadType.SearchResult) {
      result = results.tracks[0];
    } else
    // nothing found
    if (results.loadType == LoadType.NoMatches) {
      return data.channel.send(":x: **No Matches**");
    } else
    // failed to load
    if (results.loadType == LoadType.LoadFailed) {
      return data.channel.send(`:x: **load failed: debug:** ${await client.logger.logToHaste(JSON.stringify(results))}`);
    }
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
  if (client.inactiveStrikes.find(elm => elm.guild == data.guild.id) == undefined) {
    client.inactiveStrikes.push({
      guild: data.guild.id,
      strikes: 0,
      interval: this
    });
    let interval = setInterval(function () {
      if (player.playing && vchannel.members.size > 1) return client.inactiveStrikes.find(elm => elm.guild == data.guild.id).strikes = 0;

      client.inactiveStrikes.find(elm => elm.guild == data.guild.id).strikes++;

      if (client.inactiveStrikes.find(elm => elm.guild == data.guild.id).strikes == 10) {
        music.destroyPlayer();
      }
    }, 2 * 60 * 1000); // every 2 mins, 10 strikes = 20mins

    client.inactiveStrikes.find(elm => elm.guild == data.guild.id).interval = interval;
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