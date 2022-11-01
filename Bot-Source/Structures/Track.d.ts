// combined spotify and normal
export class CTrack {
  track: TrackHash;
  info: CTrackInfo;
  constructor(inputTrack: Track, url?: string, spotify?: boolean, thumbnail?: string) {
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

type TrackHash = string;
interface Track {
    track: TrackHash;
    info: CTrackInfo;
}
interface CTrackInfo {
    identifier: string;
    isStream: boolean;
    isSeekable: boolean;
    author: string;
    length: number;
    position: number;
    title: string;
    uri: string;
    sourceName: string;
    // extras for my spaghetti code
    url?: string;
    spotify?: boolean;
    thumbnail?: string;
}