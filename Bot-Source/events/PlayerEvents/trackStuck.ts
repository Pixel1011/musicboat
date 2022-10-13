import type { musicBot } from "../../client";
import type { musicHelper } from "../../utils/musicHelper";

module.exports = class TrackStuck {
  client: musicBot;
  music: musicHelper;
  constructor(music: musicHelper) {
    this.client = music.client;
    this.music = music;
  }

  async handle(track: string, threshold: number) {
    this.client.logger.log("Threshold: " + threshold);
  }
};