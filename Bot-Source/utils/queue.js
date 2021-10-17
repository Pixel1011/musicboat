const ytdl = require("ytdl-core");

class Queue {
  constructor(client) {
    this.client = client;
    this.lavalink = client.lavalink;
    this.songs = [];
    this.currentSong;
    this.lastSong; // for replay command to be added
  }
  
  // requester is user object
  // track is a result from lavalink rest api
  async add(track, requester) {
    // grab thumbnail with ytdl
    let info;
    let thumbnail;
    try {
      info = await ytdl.getInfo(track.info.uri);
      var width = info.videoDetails.thumbnails[0].width;
      
      for (var i in info.videoDetails.thumbnails) {
        if (info.videoDetails.thumbnails[i].width >= width) {
          width = info.videoDetails.thumbnails[i].width;
          thumbnail = info.videoDetails.thumbnails[i].url;
        }
      }
    } catch(e) {
      thumbnail = this.client.user.displayAvatarURL({size: 1024});
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
    if(this.currentSong != null || this.currentSong != undefined) {
      this.songs.push(song);
    } else {
      this.currentSong = song;
    }
    return true;
  }
  async shift() {
    let song = this.songs.shift();
    if(this.currentSong != null || this.currentSong != undefined) {
      this.lastSong = this.currentSong;
    }
    this.currentSong = song;
  }

}

module.exports = Queue;