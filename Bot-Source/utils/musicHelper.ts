/* eslint-disable no-unused-vars */
import { type LoadTracksResponse, LoadType } from "@lavaclient/types/rest";
import { PermissionFlagsBits } from "discord.js";
import type { Node } from "lavaclient";
import type { musicBot } from "../client";
import { CTrack } from "../Structures/Track";
import type { UnifiedData } from "./SlashUnifier";
import { BPlayer } from "../Structures/Song";
import { Queue } from "./queue";


export class musicHelper {
  public client: musicBot;
  public guildid: string;
  public lavalink: Node;

  constructor(client : musicBot, guildid: string) {
    this.client = client;
    this.guildid = guildid;
    this.lavalink = client.lavalink;
  }
  async check(data: UnifiedData, checkPlayer?: boolean, checkPlaying?: boolean, checkVC?: boolean, checkSameVC?: boolean) {
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
      if (!player.playing && (!player.queue || !player.queue.currentSong)) {
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
  async PermsOrAloneCheck(data: UnifiedData, checkAlone?: boolean, sendMsgs?: boolean) {
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

  async search(searchTerm: string, type?: string) {
    if (!type) type = "";
    searchTerm = type + searchTerm;
    // who hurt you when making this type jesus
    return await this.lavalink.api.loadTracks(searchTerm);
  }
  
  // probably remove 
  async loadSpotify(url: string) {
    //return await this.lavalink.spotify.load(url);
  }

  async join(voiceid: string) {
    if (!this.getPlayer()) {
      return await this.lavalink.players.create(this.guildid).voice.connect(voiceid);
    } else {
      return await this.getPlayer().voice.connect(voiceid);
    }
  }
  async skip() {
    let player = this.getPlayer();
    if (player.loop) {
      await player.queue.shift(player.queueLoop);
    }
    await player.stop();
  }

  getPlayer() {
    return this.lavalink.players.cache.get(this.guildid) as BPlayer;
  }

  async destroyPlayer() {
    let player = this.getPlayer();
    player.voice.disconnect();
    if (player.striker != undefined) {
      clearInterval(player.striker.interval as NodeJS.Timeout);
    }
    player.striker = undefined;
    player.queue = undefined;
    player.loop = false;
    player.queueLoop = false;
    player.setVolume(100);
    this.lavalink.players.destroy(this.guildid);
  }

  time(ms: number) {
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


  // updating this
  // i should probably take this opportunity to make this function more readable
  // and actually reunderstand what in gods name it returns,
  // may also have to uninvent the ctrack
  async parseSearch(args: string[]) {
    //let spotify = this.lavalink.spotify;
    let results: LoadTracksResponse;
    
    //return values
    let result: CTrack;
    let isPlaylist: boolean = false;
    let tracks: CTrack[];
    let playlistName = "";
    let playlistThumb = "";
    let totalTracks = 0;

    let youtubeVideoRegex = /(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w\-_]+)\\&?/;
    let youtubePlaylistRegex =  /^.*(youtu.be\/|list=)([^#&?]*).*/;
    let soundcloudTrackRegex = /^https?:\/\/(soundcloud\.com|snd\.sc)\/(.*)$/;
    return {result, results, isPlaylist, tracks, playlistName, playlistThumb, totalTracks};

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
}