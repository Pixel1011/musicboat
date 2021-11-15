module.exports = class TrackEnd {
  constructor(music) {
    this.client = music.client;
    this.music = music;
    this.client.logger.log("New TrackEnd");
  }

  async handle (track, reason) {
    this.client.logger.log(reason);
    let player = this.music.getPlayer();
      
    if (reason == "REPLACED") return;
    if (!player.queue) return; // if disconnected while playing

    if ((player.queue.songs[0] || player.loop || player.queueLoop) && player.queue.currentSong) {       
    
      if (!player.loop) player.queue.shift(player.queueLoop);
      await player.play(player.queue.currentSong.track);
    
    } else {
    // shift one last time to null currentSong from queue
      player.loop = false;
      player.queueLoop = false;
      player.queue.shift(player.queueLoop);
    }
  }
};