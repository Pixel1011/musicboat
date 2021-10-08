class musicHelper {
  constructor(client, guildid) {
    this.client = client;
    this.guildid = guildid;
    this.lavalink = client.lavalink;
    this.queue = this.lavalink.queue;
  }

  async search(searchTerm, type) {
    searchTerm = type + searchTerm;
    return await this.lavalink.rest.loadTracks(searchTerm);
  }

  async join(voiceid) {
    if(this.lavalink.players.get(this.guildid) == null) {
      return await this.lavalink.createPlayer(this.guildid).connect(voiceid);
    } else {
      return await this.lavalink.players.get(this.guildid).connect(voiceid);
    }
  }
  async skip() {
    let player = this.lavalink.players.get(this.guildid);
    await player.queue.shift();
    await player.stop();
  }
  
  getPlayer() {
    return this.lavalink.players.get(this.guildid);
  }


}

module.exports = musicHelper;