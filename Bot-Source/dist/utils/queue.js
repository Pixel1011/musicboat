"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
class Queue {
    constructor() {
        this.songs = [];
        this.currentSong;
        this.lastSong;
    }
    static getThumbnail(track) {
        let thumbnail = track.info.artworkUrl;
        return thumbnail;
    }
    async add(track, requester) {
        let thumbnail = await Queue.getThumbnail(track);
        let song = {
            encoded: track.encoded,
            identifier: track.info.identifier,
            seekable: track.info.isSeekable,
            length: track.info.length,
            isStream: track.info.isStream,
            title: track.info.title,
            url: track.info.uri,
            channel: track.info.author,
            thumbnail: thumbnail,
            requester: requester
        };
        if (this.currentSong != null || this.currentSong != undefined) {
            this.songs.push(song);
        }
        else {
            this.currentSong = song;
        }
        return true;
    }
    async shift(queueLoop, shuffle) {
        if (queueLoop)
            this.songs.push(this.currentSong);
        if (shuffle) {
            let songslen = this.songs.length;
            let randomidx = Math.floor(Math.random() * songslen);
            if (this.songs[0]) {
                let toPlay = this.songs.splice(randomidx, 1);
                this.songs.unshift(toPlay[0]);
            }
        }
        let song = this.songs.shift();
        if (this.currentSong != null || this.currentSong != undefined) {
            this.lastSong = this.currentSong;
        }
        this.currentSong = song;
    }
}
exports.Queue = Queue;
//# sourceMappingURL=queue.js.map