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
        if (reason == "replaced")
            return;
        if (!player.queue)
            return;
        if ((player.queue.songs[0] || player.loop || player.queueLoop) && player.queue.currentSong) {
            if (!player.loop)
                await player.queue.shift(player.queueLoop, player.shuffle);
            await player.play(player.queue.currentSong.encoded);
            this.music.save();
        }
        else {
            player.loop = false;
            player.queueLoop = false;
            player.shuffle = false;
            player.queue.shift(player.queueLoop, false);
            this.music.save();
        }
    }
}
exports.TrackEnd = TrackEnd;
//# sourceMappingURL=trackEnd.js.map