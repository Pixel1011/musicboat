import type { musicBot } from "../client";
import type { Node } from "lavaclient";
import type { CTrack, QueueSong } from "../Structures/Structures";
import type { User } from "discord.js";

export class Queue {
  public client: musicBot;
  public lavalink: Node;
  public songs: Array<QueueSong>;
  public currentSong: QueueSong;
  public lastSong: QueueSong;

  constructor(client: musicBot) {
    this.client = client;
    this.lavalink = client.lavalink;
    this.songs = [];
    this.currentSong;
    this.lastSong; // for replay command to be added
  }

  async getThumbnail(track: CTrack) {
    let thumbnail = track.info.thumbnail;

    if (!thumbnail) {
      thumbnail = `https://img.youtube.com/vi/${track.info.identifier}/hqdefault.jpg`;
    }
    return thumbnail;
  }
  // requester is user object
  // track is a result from lavalink rest api
  async add(track: CTrack, requester: User) {
    let thumbnail = await this.getThumbnail(track);
    if (track.info.spotify) {
      track.info.uri = track.info.url;
    }

    let song = {
      track: track.track,
      identifier: track.info.identifier,
      seekable: track.info.isSeekable,
      length: track.info.length,
      isStream: track.info.isStream,
      title: track.info.title,
      url: track.info.uri,
      channel: track.info.author,
      thumbnail: thumbnail,
      requester: requester
    };
    if (this.currentSong != null || this.currentSong != undefined) {
      this.songs.push(song);
    } else {
      this.currentSong = song;
    }
    return true;
  }
  async shift(queueLoop: boolean) {
    if (queueLoop) this.songs.push(this.currentSong);

    let song = this.songs.shift();
    if (this.currentSong != null || this.currentSong != undefined) {
      this.lastSong = this.currentSong;
    }
    this.currentSong = song;
  }

}