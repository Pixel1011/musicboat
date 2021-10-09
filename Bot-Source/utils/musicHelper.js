class musicHelper {
  constructor(client, guildid) {
    this.client = client;
    this.guildid = guildid;
    this.lavalink = client.lavalink;
  }
  async check(msg) {
    // the checks that i do in every music command, should prob throw them into a function
    let vchannel = msg.member.voice.channel;
    let player = this.client.lavalink.players.get(msg.guild.id);

    // check if playing
    if (!player) {
      msg.channel.send(":x: **Bot is not currently playing**");
      return false;
    }
    if(!player.playing && !player.queue.currentSong) {
      msg.channel.send(":x: **Bot is not currently playing**");
      return false;
    }

    // check if user in same vc
    if (!vchannel) {
      msg.channel.send(":x: **You have to be in a voice channel to use this command.**");
      return false;
    }
    
    if ((vchannel.id != msg.guild.me.voice.channelId) && msg.guild.me.voice.channelId != null) {
      msg.channel.send(":x: **You have to be in the same voice channel to use this command**");
      return false;
    }
    return true; // true if all checks pass

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