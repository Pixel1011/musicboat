import type { musicBot } from "../../client";
import type { musicHelper } from "../../utils/musicHelper";

export class TrackException {
  client: musicBot;
  music: musicHelper;
  constructor(music: musicHelper) {
    this.client = music.client;
    this.music = music;
  }

  async handle (track: string, error: Error) {
    this.client.logger.log(error.message);
  }
}