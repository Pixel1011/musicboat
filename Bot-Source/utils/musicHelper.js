// essentially where all the music happens

class musicHelper {
  constructor(client) {
    this.client = client;
    this.lavalink = client.lavalink;
    this.queue = this.lavalink.queue;
  }

  async search(searchTerm, type) {
    searchTerm = type + searchTerm;
    return await this.lavalink.rest.loadTracks(searchTerm);
  }

  async join(guildid, voiceid) {
    if(this.lavalink.players.get(guildid) == null) {
      return await this.lavalink.createPlayer(guildid).connect(voiceid);
    } else {
      return await this.lavalink.players.get(guildid).connect(voiceid);
    }
  }
  async skip(guildid) {
    let player = this.lavalink.players.get(guildid);
    await player.queue.shift();
    await player.stop();
  }


}

module.exports = musicHelper;