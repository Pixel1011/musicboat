"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
const cheerio = __importStar(require("cheerio"));
const node_fetch_1 = __importDefault(require("node-fetch"));
class Queue {
    constructor(client) {
        this.client = client;
        this.lavalink = client.lavalink;
        this.songs = [];
        this.currentSong;
        this.lastSong;
    }
    async getThumbnail(track) {
        let thumbnail = track.info.thumbnail;
        if (!thumbnail && track.info.sourceName == "youtube") {
            thumbnail = `https://img.youtube.com/vi/${track.info.identifier}/hqdefault.jpg`;
        }
        if (track.info.sourceName == "soundcloud") {
            let html = await (0, node_fetch_1.default)(track.info.uri).then((res) => res.text());
            let $ = cheerio.load(html);
            thumbnail = $("meta[property='og:image']").attr("content");
        }
        return thumbnail;
    }
    async add(track, requester) {
        let thumbnail = await this.getThumbnail(track);
        if (track.info.spotify) {
            track.info.uri = track.info.url;
        }
        let song = {
            track: track.track,
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
    async shift(queueLoop) {
        if (queueLoop)
            this.songs.push(this.currentSong);
        let song = this.songs.shift();
        if (this.currentSong != null || this.currentSong != undefined) {
            this.lastSong = this.currentSong;
        }
        this.currentSong = song;
    }
}
exports.Queue = Queue;
//# sourceMappingURL=Queue.js.map