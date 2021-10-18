const { Permissions } = require("discord.js");

class musicHelper {
  constructor(client, guildid) {
    this.client = client;
    this.guildid = guildid;
    this.lavalink = client.lavalink;
  }
  async check(msg, checkPlayer, checkPlaying, checkVC, checkSameVC) {
    if(checkPlaying == undefined) checkPlaying = true;
    if(checkPlayer == undefined) checkPlayer = true;
    if(checkVC == undefined) checkVC = true;
    if(checkSameVC == undefined) checkSameVC = true;

    let vchannel = msg.member.voice.channel;
    let player = this.client.lavalink.players.get(msg.guild.id);

    // check if player exists
    if (checkPlaying) {
      if (!player) {
        msg.channel.send(":x: **Bot is not currently playing**");
        return false;
      }
    }
    // check if playing
    if(checkPlayer) {
      if(!player.playing && !player.queue.currentSong) {
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
    if (player.loop) {
      player.queue.shift();
    }
    await player.stop();
  }
  
  getPlayer() {
    return this.lavalink.players.get(this.guildid);
  }


}

module.exports = musicHelper;