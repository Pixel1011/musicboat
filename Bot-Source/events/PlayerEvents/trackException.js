module.exports = class TrackEnd {
  constructor(music) {
    this.client = music.client;
    this.music = music;
    this.client.logger.log("New TrackException");
  }

  async handle (track, error) {
    this.client.logger.log(error);
  }
};