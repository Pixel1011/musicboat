"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackException = void 0;
class TrackException {
    constructor(music) {
        this.client = music.client;
        this.music = music;
    }
    async handle(track, error) {
        this.client.logger.log(`Error playing ${track.info.title}:\n` + error.message + "\n" + error.cause + "\n" + error.severity);
    }
}
exports.TrackException = TrackException;
//# sourceMappingURL=trackException.js.map