module.exports = class TrackEnd {
  constructor(music) {
    this.client = music.client;
    this.music = music;
  }

  async handle (track, error) {
    this.client.logger.log(error);
  }
};