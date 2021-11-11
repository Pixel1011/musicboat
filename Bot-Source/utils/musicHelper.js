const { Permissions } = require("discord.js");

class musicHelper {
  constructor(client, guildid) {
    this.client = client;
    this.guildid = guildid;
    this.lavalink = client.lavalink;
  }
  async check(msg, checkPlayer, checkPlaying, checkVC, checkSameVC) {
    if (checkPlaying == undefined) checkPlaying = true;
    if (checkPlayer == undefined) checkPlayer = true;
    if (checkVC == undefined) checkVC = true;
    if (checkSameVC == undefined) checkSameVC = true;

    let vchannel = msg.member.voice.channel;
    let player = this.getPlayer();

    // check if player exists
    if (checkPlaying) {
      if (!player) {
        msg.channel.send(":x: **Bot is not currently playing**");
        return false;
      }
    }
    // check if playing
    if (checkPlayer) {
      if (!player.playing && !player.queue.currentSong) {
        msg.channel.send(":x: **Bot is not currently playing**");
        return false;
      }
    }

    // check if user in same vc
    if (checkVC) {
      if (!vchannel) {
        msg.channel.send(":x: **You have to be in a voice channel to use this command.**");
        return false;
      }
    }
    if (checkSameVC) {
      if ((vchannel.id != msg.guild.me.voice.channelId) && msg.guild.me.voice.channelId != null) {
        msg.channel.send(":x: **You have to be in the same voice channel to use this command**");
        return false;
      }
    }
    return true; // true if all checks pass

  }
  // should be ran after check function
  async PermsOrAloneCheck(msg, checkAlone, sendMsgs) {
    if (!checkAlone) checkAlone = false;
    if (!sendMsgs) sendMsgs = false;
    let member = msg.guild.members.cache.get(msg.author.id);
    let vchannel = msg.member.voice.channel;
    let hasPerms = member.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS) || member.roles.cache.find(role => role.name == "DJ");

    if (checkAlone) {
      if (hasPerms || vchannel.members.size == 2) return true; // make sure to yeet bots from that role entirely
      if (sendMsgs) msg.channel.send(":x: **This command requires you to either have a role named ``DJ`` or the ``Manage Channels`` permission to use it** (being alone with the bot also works)");
      return false;
    } else {
      if (hasPerms) return true;
      if (sendMsgs) msg.channel.send(":x: **This command requires you to either have a role named ``DJ`` or the ``Manage Channels`` permission to use it**");
      return false;
    }
  }

  async search(searchTerm, type) {
    if (!type) type = "";
    searchTerm = type + searchTerm;
    return await this.lavalink.rest.loadTracks(searchTerm);
  }
  
  async loadSpotify(url) {
    return await this.lavalink.spotify.load(url);
  }

  async join(voiceid) {
    if (this.lavalink.players.get(this.guildid) == null) {
      return await this.lavalink.createPlayer(this.guildid).connect(voiceid);
    } else {
      return await this.lavalink.players.get(this.guildid).connect(voiceid);
    }
  }
  async skip() {
    let player = this.getPlayer();
    if (player.loop) {
      player.queue.shift(player);
    }
    await player.stop();
  }

  getPlayer() {
    return this.lavalink.players.get(this.guildid);
  }

  destroyPlayer() {
    let player = this.getPlayer();
    player.destroy();
    player.disconnect();
    if (this.client.inactiveStrikes.find(elm => elm.guild == this.guildid) != undefined) {
      clearInterval(this.client.inactiveStrikes.find(elm => elm.guild == this.guildid).interval);
    }
    let index = this.client.inactiveStrikes.findIndex(elm => elm.guild == this.guildid);
    this.client.inactiveStrikes.splice(index, 1);
    player.queue = undefined;
    player.loop = false;
    player.queueLoop = false;
    player.setVolume(100);
  }

  time(ms) { // update with hours later
    var mins = Math.floor(ms / 1000 / 60);
    var secs = Math.floor(ms / 1000 - (mins * 60)).toLocaleString("en-GB", {minimumIntegerDigits: 2});
    return `${mins}:${secs}`;
  }


}

module.exports = musicHelper;