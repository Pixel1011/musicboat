import { musicHelper } from "../utils/musicHelper";
import type { musicBot } from "../client";
import type { UnifiedData } from "../utils/SlashUnifier";
import { ArgOption, ArgType, Command } from "../Structures/Command";
import { EmbedBuilder } from "discord.js";

export default class SeekCmd extends Command {
  constructor() {
    super();
    this.name =  "seek";
    this.description =  "Goes to a specified time in a song";
    this.aliases =  [];
    this.hide =  false;
    this.arguments = [
      new ArgOption("time", "time in format of hh:mm:ss, mm:ss or ss", true, ArgType.STRING)
    ];
  
  }
  isInt(value) {
    return !isNaN(value) && parseInt(value) == value && !isNaN(parseInt(value, 10));
  }
  validateTimestr(split: string[]) {
    if (split.length > 3) return false;
    for (let i = 0; i < split.length; i++) {
      if (!this.isInt(split[i])) return false;
    }
    return true;
  }

  async run(client: musicBot, data: UnifiedData, args: string[]) {
    const music = new musicHelper(client, data.guild.id);
    if (!await music.check(data, true)) return;
    //if (!await music.PermsOrAloneCheck(data, true, true)) return;
    let player = music.getPlayer();
    let timestr = args.join("").toLowerCase();
    let split = timestr.split(":");

    let failEmbed = new EmbedBuilder();
    failEmbed.setTitle(":x: Invalid usage");
    failEmbed.setDescription(`\n${client.prefix}seek [HH:MM:SS/MM:SS/S]\nExample: \`\`${client.prefix}seek 1:23\`\``);
    if (!timestr || !this.validateTimestr(split)) {
      return data.send({embeds: [failEmbed]});
    }
    let time = 0;
    let hours: string, mins: string, secs: string;
    if (split.length == 3) {
      hours = split[0];
      mins = split[1];
      secs = split[2];
    } else if (split.length == 2) {
      mins = split[0];
      secs = split[1];      
    } else if (split.length == 1) {
      secs = split[0];
    }
    
    if (hours) time += parseInt(hours) * 60 * 60;
    if (mins) time += parseInt(mins) * 60;
    if (secs) time += parseInt(secs);
    if (time * 1000 > player.queue.currentSong.length) {
      time = player.queue.currentSong.length / 1000;
    }

    player.seek(time * 1000);
    data.send(`⏩ Skipped to \`\`${music.time(time * 1000)}\`\``);
  }
}