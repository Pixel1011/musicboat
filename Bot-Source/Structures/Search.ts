// it feels dumb that i need to make this file
// because all the types are made in lavaclient with Schema
// and at the same time, all the types in the .d.ts files are all clumped/expanded together making them unreadable
// good
// god

export type trackInfo = {
    /**
     * The track identifier.
     */
    readonly identifier: string;
    /**
     * Whether the track is seekable.
     */
    readonly isSeekable: boolean;
    /**
     * The track author.
     */
    readonly author: string;
    /**
     * The track length in milliseconds.
     */
    readonly length: number;
    /**
     *  Whether the track is a live stream.
     */
    readonly isStream: boolean;
    /**
     * The track position (in milliseconds).
     */
    readonly position: number;
    /**
     * The track title.
     */
    readonly title: string;
    /**
     * The track uri.
     */
    readonly uri: string | null;
    /**
     * The track source name.
     */
    readonly sourceName: string;
    /**
     * The track artwork url.
     */
    readonly artworkUrl: string | null;
    /**
     * The track [ISRC](https://en.wikipedia.org/wiki/International_Standard_Recording_Code)
     */
    readonly isrc: string | null;
}

export type Track = {
    encoded: string;
    info: trackInfo;
    pluginInfo: Record<string, unknown>;
    userData: Record<string, unknown>;
}


export type Tracks = readonly Track[];
export type playlistInfo = {
  name: string;
  selectedTrack: number;
}

export type playlist = {
  readonly info: playlistInfo;
  readonly pluginInfo: Record<string, unknown>;
  readonly tracks: Tracks;
}

export type exception = {
    message: string | null;
    severity: "common" | "suspicious" | "fault";
    cause: string;
}

export type trackLoaded = {
    readonly loadType: "track";
    data: Track;
}
export type playlistLoaded = {
    readonly loadType: "playlist";
    data: playlist;
}
export type searchLoadResult = {
    readonly loadType: "search";
    data: Tracks;
}
export type emptyLoadResult = {
    readonly loadType: "empty";
    data: null;
}
export type errorLoadResult = {
    readonly loadType: "error";
    data: exception;
}


export type loadResult = trackLoaded | playlistLoaded | searchLoadResult | emptyLoadResult | errorLoadResult;

export type ParsedResult = {
    /**
     * First track in the search results/playlist (will be removed from tracks if playlist)
     */
    result?: Track;
    /**
     * Whether or not an error occured
     */
    error: boolean;
    /**
     * Exception if an error occured
     */
    exception?: exception;
    /**
     * If the search results are a playlist
     */
    isPlaylist: boolean;
    /**
     * The tracks in the playlist minus the first track
     */
    tracks?: Track[];
    /**
     * The name of the playlist
     */
    playlistName?: string;
    /**
     * The thumbnail of the playlist
     */
    playlistThumb?: string;
  
  }