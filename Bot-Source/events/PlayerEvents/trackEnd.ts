import type { musicBot } from "../../client";
import type { musicHelper } from "../../utils/musicHelper";
import { Track } from "../../Structures/Search";

type TrackEndReason = "finished" | "loadFailed" | "stopped" | "replaced" | "cleanup";

export class TrackEnd {
  client: musicBot;
  music: musicHelper;

  constructor(music: musicHelper) {
    this.client = music.client;
    this.music = music;
  }

  async handle (track: Track, reason: TrackEndReason) {
    this.client.logger.logFrom(reason, "TrackEnd");
    let player = this.music.getPlayer();
      
    if (reason == "replaced") return;
    if (!player.queue) return; // if disconnected while playing

    if ((player.queue.songs[0] || player.loop || player.queueLoop) && player.queue.currentSong) {       
    
      if (!player.loop) await player.queue.shift(player.queueLoop, player.shuffle);
      await player.play(player.queue.currentSong.encoded);
      this.music.save();
    } else {
    // shift one last time to null currentSong from queue
      player.loop = false;
      player.queueLoop = false;
      player.shuffle = false;
      player.queue.shift(player.queueLoop, false);
      this.music.save();
    }
  }
}