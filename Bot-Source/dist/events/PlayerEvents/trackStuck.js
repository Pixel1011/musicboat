"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackStuck = void 0;
class TrackStuck {
    constructor(music) {
        this.client = music.client;
        this.music = music;
    }
    async handle(track, threshold) {
        this.client.logger.log(`Threshold playing ${track.info.title}: ` + threshold);
    }
}
exports.TrackStuck = TrackStuck;
//# sourceMappingURL=trackStuck.js.map