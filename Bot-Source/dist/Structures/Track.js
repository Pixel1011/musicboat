"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CTrack = void 0;
class CTrack {
    constructor(inputTrack, url, spotify, thumbnail) {
        let i = inputTrack.info;
        this.track = inputTrack.track;
        this.info.identifier = i.identifier;
        this.info.isStream = i.isStream;
        this.info.isSeekable = i.isSeekable;
        this.info.author = i.author;
        this.info.length = i.length;
        this.info.position = i.position;
        this.info.title = i.title;
        this.info.uri = i.uri;
        this.info.sourceName = i.sourceName;
        this.info.url = url;
        this.info.spotify = spotify;
        this.info.thumbnail = thumbnail;
    }
}
exports.CTrack = CTrack;
//# sourceMappingURL=Track.js.map