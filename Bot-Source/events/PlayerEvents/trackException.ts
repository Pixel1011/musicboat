import type { musicBot } from "../../client";
import type { musicHelper } from "../../utils/musicHelper";

module.exports = class TrackEnd {
  client: musicBot;
  music: musicHelper;
  constructor(music: musicHelper) {
    this.client = music.client;
    this.music = music;
  }

  async handle (track: string, error: Error) {
    this.client.logger.log(error.message);
  }
};