import { EmbedBuilder, PermissionFlagsBits } from "discord.js";
import type { Node } from "lavaclient";
import type { musicBot } from "../client";
import type { UnifiedData } from "./SlashUnifier";
import { BPlayer } from "../Structures/Song";
import { Queue } from "./queue";
import { loadResult, ParsedResult, Track } from "../Structures/Search";



export class musicHelper {
  public client: musicBot;
  public guildid: string;
  public lavalink: Node;

  constructor(client : musicBot, guildid: string) {
    this.client = client;
    this.guildid = guildid;
    this.lavalink = client.lavalink;
  }
  async check(data: UnifiedData, checkPlayer?: boolean, checkPlaying?: boolean, checkVC?: boolean, checkSameVC?: boolean): Promise<boolean> {
    if (checkPlaying == undefined) checkPlaying = true;
    if (checkPlayer == undefined) checkPlayer = true;
    if (checkVC == undefined) checkVC = true;
    if (checkSameVC == undefined) checkSameVC = true;

    let vchannel = data.member.voice.channel;
    let player = this.getPlayer();

    // check if player exists
    if (checkPlaying) {
      if (!player) {
        data.send(":x: **Bot is not currently playing**");
        return false;
      }
    }
    // check if playing
    if (checkPlayer) {
      if (!player || (!player.playing && (!player.queue || !player.queue.currentSong))) {
        data.send(":x: **Bot is not currently playing**");
        return false;
      }
    }

    // check if user in same vc
    if (checkVC) {
      if (!vchannel) {
        data.send(":x: **You have to be in a voice channel to use this command.**");
        return false;
      }
    }
    if (checkSameVC) {
      if ((vchannel.id != data.guild.members.me.voice.channelId) && data.guild.members.me.voice.channelId != null) {
        data.send(":x: **You have to be in the same voice channel to use this command**");
        return false;
      }
    }
    return true; // true if all checks pass

  }
  // should be ran after check function
  async PermsOrAloneCheck(data: UnifiedData, checkAlone?: boolean, sendMsgs?: boolean): Promise<boolean> {
    if (!checkAlone) checkAlone = false;
    if (!sendMsgs) sendMsgs = false;
    let member = data.guild.members.cache.get(data.author.id);
    let vchannel = data.member.voice.channel;
    let hasPerms = member.permissions.has(PermissionFlagsBits.ManageChannels) || member.roles.cache.find(role => role.name == "DJ");

    if (checkAlone) {
      if (hasPerms || vchannel.members.size == 2) return true; // make sure to yeet bots from that role entirely
      if (sendMsgs) data.send(":x: **This command requires you to either have a role named ``DJ`` or the ``Manage Channels`` permission to use it** (being alone with the bot also works)");
      return false;
    } else {
      if (hasPerms) return true;
      if (sendMsgs) data.send(":x: **This command requires you to either have a role named ``DJ`` or the ``Manage Channels`` permission to use it**");
      return false;
    }
  }

  async search(searchTerm: string, type?: string): Promise<loadResult>  {
    if (!type) type = "";
    searchTerm = type + searchTerm;
    // god help me with the way types are done in lavaclient
    return await this.lavalink.api.loadTracks(searchTerm);
  }

  async join(voiceid: string): Promise<BPlayer<Node>> {
    if (!this.getPlayer()) {
      await this.lavalink.players.create(this.guildid).voice.connect(voiceid);
      return this.getPlayer();
    } else {
      await this.getPlayer().voice.connect(voiceid);
      return this.getPlayer();
    }
  }
  async skip(): Promise<void> {
    let player = this.getPlayer();
    if (player.loop) {
      await player.queue.shift(player.queueLoop);
    }
    await player.stop();
  }

  getPlayer(): BPlayer {
    return this.lavalink.players.cache.get(this.guildid) as BPlayer;
  }

  async destroyPlayer(): Promise<void> {
    let player = this.getPlayer();
    player.voice.disconnect();
    if (player.striker != undefined) {
      clearInterval(player.striker.interval as NodeJS.Timeout);
    }
    player.striker = undefined;
    player.queue = undefined;
    player.loop = false;
    player.queueLoop = false;
    this.setVolume(100);
    this.lavalink.players.destroy(this.guildid);
  }

  time(ms: number): string {
    var mins = Math.floor(ms / 1000 / 60);
    var secs = Math.floor(ms / 1000 - (mins * 60)).toLocaleString("en-GB", {minimumIntegerDigits: 2});
    if (mins < 60) return `${mins}:${secs}`;

    var hours = Math.floor(mins / 60);
    mins = Math.floor(mins - (hours * 60));
    if (hours < 24) return `${hours.toLocaleString("en-GB", {minimumIntegerDigits: 2})}:${mins.toLocaleString("en-GB", {minimumIntegerDigits: 2})}:${secs}`;

    var days = Math.floor(hours / 24);
    hours = Math.floor(hours - (days * 24));
    return `${days.toLocaleString("en-GB", {minimumIntegerDigits: 1})}:${hours.toLocaleString("en-GB", {minimumIntegerDigits: 2})}:${mins.toLocaleString("en-GB", {minimumIntegerDigits: 2})}:${secs}`;
  }




  async parseSearch(args: string[]): Promise<ParsedResult> {
    //let spotify = this.lavalink.spotify;
    let results: loadResult;
    //return values
    let returnVals: ParsedResult = {
      result: undefined,
      error: false,
      exception: undefined,
      isPlaylist: false,
      tracks: [],
      playlistName: "",
      playlistThumb: ""
    };
    
    // general regex for youtube playlists/videos, spotify playlists/tracks, soundcloud tracks and playlists
    // FEATURE: add support for other sources (yt music might be an easy one)
    let urlregex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?(?=.*v=\w+)(?:\S+)?v=|embed\/|v\/|watch\?v=|youtube.com\/\S+\/|youtube.com\/c\/\S+\/|youtu\.be\/|playlist\?list=)([\w-]+)|youtu\.be\/([\w-]+))|(?:https?:\/\/)?(?:open\.spotify\.com\/(track|album|playlist)\/|spotify:(track|album|playlist):)([\w\d]+)|(?:https?:\/\/)?(?:www\.)?(?:soundcloud\.com\/(?:[\w\d-]+\/)?(?:sets\/)?|soundcloud.app.goo.gl\/)([\w\d-]+)\/([\w\d-]+)/gm;

    // get search results
    if (urlregex.test(args.join(" "))) {
      results = await this.search(args.join(" ").trim());
    } else {
      // FEATURE: make it possible to search with other sources
      results = await this.search(args.join(" "), "ytsearch:");
    }
    
    // depending on whats loaded, set the return values
    switch (results.loadType) {
        case "track": {
          returnVals.result = results.data;
          break;
        }
        case "playlist": {
          returnVals.isPlaylist = true;
          let playlist = results;
          returnVals.playlistName = playlist.data.info.name;

          // spotify appears to give an actual thumbnail so may as well use it
          // FEATURE: add support for other sources, 
          if (playlist.data.tracks[0].info.sourceName == "spotify") {
            // TEST: might be null, i dont know how spotify works exactly
            returnVals.playlistThumb = playlist.data.pluginInfo.artworkUrl as string;
          } else {
            // if not spotify, use the first song in the playlist
            returnVals.playlistThumb = Queue.getThumbnail(playlist.data.tracks[0]);
          }

          // make mutable copy of tracks
          let tracks: Track[] = [...playlist.data.tracks];
          // find and remove songs that are bugged/no length
          for (let i= 0; i < tracks.length; i++) {
            if (tracks[i].info.length == 0) {
              // splice out song
              tracks.splice(i, 1);
              i--;
              continue;
            }
          }
          // figure out what the first track is
          let firstTrackidx = results.data.info.selectedTrack;
          if (firstTrackidx == -1) firstTrackidx = 0;
          returnVals.result = tracks[firstTrackidx];
          // remove from array
          tracks.splice(firstTrackidx, 1);
          if (firstTrackidx != 0) {
            // add everything above to end of array so the first track is at the start
            tracks = tracks.concat(tracks.splice(0, firstTrackidx));
          }

          // if playlist only has one song, this should be empty
          returnVals.tracks = tracks;
          
          break;
        }
        case "search": {
          returnVals.result = results.data[0];
          break;
        }
        // not quite sure what this one is, empty search results/playlist?
        case "empty": {
          break;
        }
        case "error": {
          returnVals.error = true;
          returnVals.exception = results.data;
          break;
        }
    }
    return returnVals;

    // legacy code which im leaving for reference for now
    // high chance that with lavasrc most of this will be useless
    /*    if (spotify.isSpotifyUrl(args.join(" "))) {
      let results = await this.loadSpotify(args.join(" "));
  
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
            // run before resolveYoutubeTracks otherwise very random videos get resolved into non existent songs
            for (let i= 0; i < playlist.tracks.length; i++) {
              // apparantly songs can be nonexistent in spotify and they have a duration of 0
              // i swear theres an edge case if someone tries to play a playlist that only has a nonexistent song
              // i could return another variable and handle that in play.ts
              if (playlist.tracks[i].data.duration_ms == 0) {
                // splice out song
                playlist.tracks.splice(i, 1);
                i--;
                continue;
              }
            }

            tracks = await playlist.resolveYoutubeTracks();
            let i = 0;
            for (let t of tracks) {
              t.info.spotify = true;
              t.info.url = playlist.tracks[i].data.external_urls.spotify;
              t.info.thumbnail = playlist.tracks[i].data.album.images[0].url;
              t.info.title = playlist.tracks[i].data.name;
              i++;
            }

            playlistName = playlist.data.name;
            totalTracks = tracks.length;
            playlistThumb = playlist.data.images[0].url;
            result = tracks[0];  
            break;
          }
  
      }
    } 
    
    // else if is not spotify
    else { 
      if (youtubeVideoRegex.test(args.join(" ")) || youtubePlaylistRegex.test(args.join(" ")) || soundcloudTrackRegex.test(args.join(" "))) {
        results = await this.search(args.join(" "));
      } else {
        results = await this.search(args.join(" "), "ytsearch:");
      }
            
      // playlist
      if (results.loadType == LoadType.PlaylistLoaded) {        
        isPlaylist = true;
        tracks = results.tracks;
        totalTracks = tracks.length;
        playlistName = results.playlistInfo.name;
        playlistThumb = await Queue.getThumbnail(tracks[0]);
  
        let selectedTrack = results.playlistInfo.selectedTrack;
        if (selectedTrack == -1) selectedTrack = 0;
        result = tracks[selectedTrack];
      } else 
      
      // single track / search result
      if (results.loadType == LoadType.TrackLoaded || results.loadType == LoadType.SearchResult) {
        result = results.tracks[0];
      } 
      
    }
    return {result, results, isPlaylist, tracks, playlistName, playlistThumb, totalTracks};
  }*/

  }

  async addPlaylist(tracks: Track[], data: UnifiedData): Promise<number> {
    // start at 1 as the first song of playlist is already added
    let totalTracks = 1;
      
    // add all songs to queue
    for (let i = 0; i < tracks.length; i++) {
      let t = tracks[i];
      if (!t) continue;
      await this.getPlayer().queue.add(t, data.author);
    
      totalTracks++;
    }
    return totalTracks;
  }
  async sendPlaylistEmbed(data: UnifiedData, timeTillPlaying: string, totalTracks: number | string, position: number | string, parsed: ParsedResult): Promise<void> {
    let avatarURL = data.author.avatarURL({size: 4096});
          
    let embed = new EmbedBuilder();
    embed.setAuthor({name: "Playlist added to queue", iconURL: avatarURL});
    embed.setDescription(`**${parsed.playlistName}**`);
    embed.addFields([
      {name: "Estimated time until playing", value: timeTillPlaying, inline: true},
      {name: "Position in queue", value: `${position}`, inline: true},
      {name: "Enqueued", value: `\`\`${totalTracks}\`\` songs`, inline: true}
    ]);
    embed.setThumbnail(parsed.playlistThumb);
    embed.setColor(0x202225);
    data.channel.send({embeds: [embed]});
  }
  async setVolume(volume: number): Promise<void> {
    let player = this.getPlayer();
    player.setVolume(volume);
  }
}