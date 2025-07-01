// for restoring players after abrupt restart

import { TextChannel, VoiceChannel } from "discord.js";
import { musicHelper } from "./musicHelper";
import { Queue } from "./queue";
import { QueueSong } from "../Structures/Song";

export class PlayerData {
  public vchannelid: string;
  public boundChannelid: string;
  public guildid: string;
  public q_songs?: Array<QueueSong>;
  public q_currentSong?: QueueSong;
  public q_lastSong?: QueueSong;
  public volume?: number;
  public loop?: boolean;
  public queueLoop?: boolean;
  public paused?: boolean;

  // arguably could add position in song and skips but eh

  constructor(vcid: string, bcid: string, gid: string, q_songs: Array<QueueSong>, q_currentSong: QueueSong, q_lastSong: QueueSong, volume: number, loop: boolean, queueLoop: boolean, paused: boolean) {
    this.vchannelid = vcid;
    this.guildid = gid;
    this.boundChannelid = bcid;
    this.q_songs = q_songs;
    this.q_currentSong = q_currentSong;
    this.q_lastSong = q_lastSong;
    this.volume = volume;
    this.loop = loop;
    this.queueLoop = queueLoop;
    this.paused = paused;
  }

  async restore(music: musicHelper): Promise<void> {
    if (!this.q_currentSong) return;
    let client = music.client;
    let guild = client.guilds.cache.get(this.guildid);
    let tchannel = guild.channels.cache.get(this.boundChannelid) as TextChannel;
    let vchannel = guild.channels.cache.get(this.vchannelid) as VoiceChannel;
    if (!vchannel || !vchannel.joinable || !vchannel.speakable) return;
    let player = await music.join(this.vchannelid);
    player.boundChannel = this.boundChannelid;
    player.queue = new Queue();
    player.queue.songs = this.q_songs;
    player.queue.currentSong = this.q_currentSong;
    player.queue.lastSong = this.q_lastSong;

    player.skips = [];

    music.setVolume(this.volume);
    player.loop = this.loop;
    player.queueLoop = this.queueLoop;
    player.play(player.queue.currentSong.encoded);
    if (this.paused) {
      setTimeout(() => {
        player.pause();
      }, 500);
    }
    music.registerEvents();
    music.registerInactivityStriker(vchannel);
    if (tchannel.isSendable()) {
      let s = this.q_songs.length == 0 ? "" : "s";
      tchannel.send(`Rejoining \`\`${vchannel.name}\`\` with ${this.q_songs.length + 1} loaded song${s}`);
      client.logger.log(`Rejoining ${vchannel.name} with ${this.q_songs.length + 1} loaded song${s}`);
    }
  }
}