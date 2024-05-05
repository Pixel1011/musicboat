import type { musicBot } from "../../client";
import { exception, Track } from "../../Structures/Search";
import type { musicHelper } from "../../utils/musicHelper";

export class TrackException {
  client: musicBot;
  music: musicHelper;
  constructor(music: musicHelper) {
    this.client = music.client;
    this.music = music;
  }

  async handle (track: Track, error: exception) {
    this.client.logger.log(`Error playing ${track.info.title}:\n` + error.message + "\n" + error.cause + "\n" + error.severity);
  }
}