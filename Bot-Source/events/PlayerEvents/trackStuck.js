module.exports = class TrackStuck {
  constructor(music) {
    this.client = music.client;
    this.music = music;
    this.client.logger.log("New TrackStuck");
  }

  async handle(track, threshold) {
    this.client.logger.log(threshold);
  }
};