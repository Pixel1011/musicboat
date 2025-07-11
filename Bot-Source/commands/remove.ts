import { EmbedBuilder } from "discord.js";
import type { musicBot } from "../client";
import { musicHelper } from "../utils/musicHelper";
import type { QueueSong } from "../Structures/Song";
import type { UnifiedData } from "../utils/SlashUnifier";
import { ArgOption, ArgType, Command } from "../Structures/Command";

export default class RemoveCmd extends Command {
  constructor() {
    super();
    this.name =  "remove";
    this.description =  "Removes a certain entry from the queue.";
    this.aliases =  ["rm"];
    this.hide =  false;
    this.arguments =  [
      new ArgOption("songnumber", "Song to remove", true, ArgType.INTEGER)
    ];
  
  }

  isInt(value) {
    return !isNaN(value) && parseInt(value) == value && !isNaN(parseInt(value, 10));
  }

  async run(client: musicBot, data: UnifiedData, args: string[]) {
    const music = new musicHelper(client, data.guild.id);
    if (!await music.check(data, true, true)) return;
    let player = music.getPlayer();

    let failEmbed = new EmbedBuilder();
    failEmbed.setTitle(":x: Invalid usage");
    failEmbed.setDescription(`\n${client.prefix}remove [Index / Indices]\nExample: \`\`${client.prefix}remove 1 2 3\`\``);
    if (!args.join()) {
      return data.send({embeds: [failEmbed]});
    }

    let nums = args;
    let INums: number[] = [];
    // make sure numbers are actually a number and that they are above 0 
    for (let i in nums) {
      let num = nums[i];
      if (!this.isInt(num) || Number(num) <= 0) {
        data.send({embeds: [failEmbed]});
        return;
      }
      INums[i] = Number(num);
    }


    // yeet song if user has permission
    let removedSong: QueueSong;
    let songsRemoved = 0;

    for (let i in INums) {
      let num = INums[i] - 1;
      removedSong = player.queue.songs[num];

      if (!music.PermsOrAloneCheck(data, true, false) || removedSong.requester.id != data.author.id) {
        data.send(":x: **The song you attempted to remove either does not exist, or you lack permission to remove songs.**");
        continue;
      }
      player.queue.songs.splice(num, 1);
      songsRemoved++;

    }

    if (nums.length == 1) {
      data.send(`✅ **Removed** \`\`${removedSong.title}\`\``);
    } else {
      data.send(`✅ **Removed** \`\`${songsRemoved}\`\` songs`);
    }


  }
}