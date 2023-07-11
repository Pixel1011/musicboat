import type { Item, SpotifyPlaylist, SpotifyTrack } from "@lavaclient/spotify";
import { type LoadTracksResponse, LoadType } from "@lavaclient/types/rest";
import { PermissionFlagsBits } from "discord.js";
import type { Node, Player } from "lavaclient";
import type { musicBot } from "../client";
import type { CTrack } from "../Structures/Track";
import type { UnifiedData } from "./SlashUnifier";

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
    return await this.lavalink.rest.loadTracks(searchTerm);
  }
  
  async loadSpotify(url: string) {
    return await this.lavalink.spotify.load(url);
  }

  async join(voiceid: string) {
    if (this.lavalink.players.get(this.guildid) == null) {
      return await this.lavalink.createPlayer(this.guildid).connect(voiceid);
    } else {
      return await this.lavalink.players.get(this.guildid).connect(voiceid);
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
    return this.lavalink.players.get(this.guildid);
  }

  destroyPlayer() {
    let player = this.getPlayer();
    player.destroy();
    player.disconnect();
    if (player.striker != undefined) {
      clearInterval(player.striker.interval);
    }
    player.striker = undefined;
    player.queue = undefined;
    player.loop = false;
    player.queueLoop = false;
    player.setVolume(100);
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

  async parseSearch(args: string[], player: Player<Node>) {
    let spotify = this.lavalink.spotify;
    let results: Item | LoadTracksResponse;
    
    //return values
    let result: CTrack;
    let isPlaylist: boolean = false;
    let tracks: CTrack[];
    let playlistName = "";
    let playlistThumb = "";
    let totalTracks = 0;

    let youtubeVideoRegex = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/;
    let youtubePlaylistRegex =  /^.*(youtu.be\/|list=)([^#&?]*).*/;
    let soundcloudTrackRegex = /^https?:\/\/(soundcloud\.com|snd\.sc)\/(.*)$/;

    if (spotify.isSpotifyUrl(args.join(" "))) {
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
        playlistThumb = await player.queue.getThumbnail(tracks[0]);
  
        let selectedTrack = results.playlistInfo.selectedTrack;
        if (selectedTrack == -1) selectedTrack = 0;
        result = tracks[selectedTrack];
      } else 
      
      // single track / search result
      if (results.loadType == LoadType.TrackLoaded || results.loadType == LoadType.SearchResult) {
        result = results.tracks[0];
      } 
      
      return {result, results, isPlaylist, tracks, playlistName, playlistThumb, totalTracks};
    }
  }
}