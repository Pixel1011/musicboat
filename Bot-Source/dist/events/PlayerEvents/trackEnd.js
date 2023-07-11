"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackEnd = void 0;
class TrackEnd {
    constructor(music) {
        this.client = music.client;
        this.music = music;
    }
    async handle(track, reason) {
        this.client.logger.logFrom(reason, "TrackEnd");
        let player = this.music.getPlayer();
        if (reason == "REPLACED")
            return;
        if (!player.queue)
            return;
        if ((player.queue.songs[0] || player.loop || player.queueLoop) && player.queue.currentSong) {
            if (!player.loop)
                await player.queue.shift(player.queueLoop);
            await player.play(player.queue.currentSong.track);
        }
        else {
            player.loop = false;
            player.queueLoop = false;
            player.queue.shift(player.queueLoop);
        }
    }
}
exports.TrackEnd = TrackEnd;
//# sourceMappingURL=trackEnd.js.map