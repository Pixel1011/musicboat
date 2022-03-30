module.exports = class TrackStuck {
  constructor(music) {
    this.client = music.client;
    this.music = music;
  }

  async handle(track, threshold) {
    this.client.logger.log(threshold);
  }
};