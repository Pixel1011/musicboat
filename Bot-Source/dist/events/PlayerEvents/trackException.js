"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackException = void 0;
class TrackException {
    constructor(music) {
        this.client = music.client;
        this.music = music;
    }
    async handle(track, error) {
        this.client.logger.log(error.message);
    }
}
exports.TrackException = TrackException;
//# sourceMappingURL=trackException.js.map