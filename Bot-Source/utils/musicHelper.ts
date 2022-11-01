import type { Message } from "discord.js";
import { PermissionFlagsBits } from "discord.js";
import type { Node } from "lavaclient";
import type { musicBot } from "../client";

export class musicHelper {
  public client: musicBot;
  public guildid: string;
  public lavalink: Node;

  constructor(client : musicBot, guildid: string) {
    this.client = client;
    this.guildid = guildid;
    this.lavalink = client.lavalink;
  }
  async check(msg: Message, checkPlayer?: boolean, checkPlaying?: boolean, checkVC?: boolean, checkSameVC?: boolean) {
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
      if (!player.playing && (!player.queue || !player.queue.currentSong)) {
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
      if ((vchannel.id != msg.guild.members.me.voice.channelId) && msg.guild.members.me.voice.channelId != null) {
        msg.channel.send(":x: **You have to be in the same voice channel to use this command**");
        return false;
      }
    }
    return true; // true if all checks pass

  }
  // should be ran after check function
  async PermsOrAloneCheck(msg: Message, checkAlone?: boolean, sendMsgs?: boolean) {
    if (!checkAlone) checkAlone = false;
    if (!sendMsgs) sendMsgs = false;
    let member = msg.guild.members.cache.get(msg.author.id);
    let vchannel = msg.member.voice.channel;
    let hasPerms = member.permissions.has(PermissionFlagsBits.ManageChannels) || member.roles.cache.find(role => role.name == "DJ");

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

  async search(searchTerm: string, type?: string) {
    if (!type) type = "";
    searchTerm = type + searchTerm;
    return await this.lavalink.rest.loadTracks(searchTerm);
  }
  
  async loadSpotify(url: string) {
    return await this.lavalink.spotify.load(url);
  }

  async join(voiceid: string) {
    if (this.lavalink.players.get(this.guildid) == null) {
      return await this.lavalink.createPlayer(this.guildid).connect(voiceid);
    } else {
      return await this.lavalink.players.get(this.guildid).connect(voiceid);
    }
  }
  async skip() {
    let player = this.getPlayer();
    if (player.loop) {
      await player.queue.shift(player.queueLoop);
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

  time(ms: number) {
    var mins = Math.floor(ms / 1000 / 60);
    var secs = Math.floor(ms / 1000 - (mins * 60)).toLocaleString("en-GB", {minimumIntegerDigits: 2});
    if (mins < 60) return `${mins}:${secs}`;

    var hours = Math.floor(mins / 60);
    mins = Math.floor(mins - (hours * 60));
    if (hours < 24) return `${hours}:${mins}:${secs}`;

    var days = Math.floor(hours / 24);
    hours = Math.floor(hours - (days * 24));
    return `${days}:${hours}:${mins}:${secs}`;
  }


}