import { MessageEmbed } from "discord.js";
import type { Message } from "discord.js";
import type { musicBot } from "../client";
import { musicHelper } from "../utils/musicHelper";
import type { QueueSong } from "../Structures/Song";

function isInt(value) {
  return !isNaN(value) && parseInt(value) == value && !isNaN(parseInt(value, 10));
}
async function run(client: musicBot, msg: Message, args: string[]) {
  const music = new musicHelper(client, msg.guild.id);
  if (!await music.check(msg, true, true)) return;
  let player = music.getPlayer();

  let failEmbed = new MessageEmbed();
  failEmbed.setTitle(":x: Invalid usage");
  failEmbed.setDescription(`\n${client.prefix}remove [Index / Indices]\nExample: \`\`${client.prefix}remove 1 2 3\`\``);
  if (!args.join()) {
    return msg.channel.send({embeds: [failEmbed]});
  }

  let nums = args;
  let INums = Array<number>;
  // make sure numbers are actually a number and that they are above 0 
  for (let i in nums) {
    let num = nums[i];
    if (!isInt(num) || Number(num) <= 0) {
      msg.channel.send({embeds: [failEmbed]});
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

    if (!music.PermsOrAloneCheck(msg, true, false) || removedSong.requester.id != msg.author.id) {
      msg.channel.send(":x: **The song you attempted to remove either does not exist, or you lack permission to remove songs.**");
      continue;
    }
    player.queue.songs.splice(num, 1);
    songsRemoved++;

  }

  if (nums.length == 1) {
    msg.channel.send(`✅ **Removed** \`\`${removedSong.title}\`\``);
  } else {
    msg.channel.send(`✅ **Removed** \`\`${songsRemoved}\`\` songs`);
  }


}
export const data = {
  name: "remove",
  description: "Removes a certain entry from the queue.",
  aliases: ["rm"],
  hide: false,
  run: run
};