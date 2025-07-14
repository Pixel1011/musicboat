import type { User } from "discord.js";
import type { QueueSong } from "../Structures/Song";
import { Track } from "../Structures/Search";

export class Queue {
  public songs: Array<QueueSong>;
  public currentSong: QueueSong;
  public lastSong: QueueSong;

  constructor() {
    this.songs = [];
    this.currentSong;
    this.lastSong; // for replay command to be added
  }

  static getThumbnail(track: Track) {
    let thumbnail = track.info.artworkUrl;
    return thumbnail;
  }
  // requester is user object
  // track is a result from lavalink rest api
  async add(track: Track, requester: User) {
    let thumbnail = await Queue.getThumbnail(track);

    let song: QueueSong = {
      encoded: track.encoded,
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

  async shift(queueLoop: boolean, shuffle: boolean) {
    if (queueLoop) this.songs.push(this.currentSong);
    if (shuffle) {
      let songslen = this.songs.length;
      let randomidx = Math.floor(Math.random() * songslen);
      if (this.songs[0]) {
        let toPlay = this.songs.splice(randomidx, 1);
        this.songs.unshift(toPlay[0]);
      }
    }
    let song = this.songs.shift();
    if (this.currentSong != null || this.currentSong != undefined) {
      this.lastSong = this.currentSong;
    }
    this.currentSong = song;
  }

}