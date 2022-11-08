import type { TrackEndReason } from "@lavaclient/types/payloads";
import type { musicBot } from "../../client";
import type { musicHelper } from "../../utils/musicHelper";

export class TrackEnd {
  client: musicBot;
  music: musicHelper;

  constructor(music: musicHelper) {
    this.client = music.client;
    this.music = music;
  }

  async handle (track: string, reason: TrackEndReason) {
    this.client.logger.logFrom(reason, "TRACKEND");
    let player = this.music.getPlayer();
      
    if (reason == "REPLACED") return;
    if (!player.queue) return; // if disconnected while playing

    if ((player.queue.songs[0] || player.loop || player.queueLoop) && player.queue.currentSong) {       
    
      if (!player.loop) await player.queue.shift(player.queueLoop);
      await player.play(player.queue.currentSong.track);
    
    } else {
    // shift one last time to null currentSong from queue
      player.loop = false;
      player.queueLoop = false;
      player.queue.shift(player.queueLoop);
    }
  }
}