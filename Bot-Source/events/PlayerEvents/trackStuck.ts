import type { musicBot } from "../../client";
import { Track } from "../../Structures/Search";
import type { musicHelper } from "../../utils/musicHelper";

export class TrackStuck {
  client: musicBot;
  music: musicHelper;
  constructor(music: musicHelper) {
    this.client = music.client;
    this.music = music;
  }

  async handle(track: Track, threshold: number) {
    this.client.logger.log(`Threshold playing ${track.info.title}: ` + threshold);
  }
}