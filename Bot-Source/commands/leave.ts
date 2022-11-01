import { musicHelper } from "../utils/musicHelper";
import type { Message } from "discord.js";
import type { musicBot } from "../client";

async function run(client: musicBot, msg: Message) {
  const music = new musicHelper(client, msg.guild.id);
  if (!await music.check(msg, false, false, true, true)) return;
  let player = music.getPlayer();

  if (!msg.guild.members.me.voice.channelId || !player) {
    return msg.channel.send(`:x: **I am not connected to a voice channel.** Type ${client.prefix}join to get me in one`);
  }

  music.destroyPlayer();
  msg.channel.send("📭 **Successfully disconnected**");

}
export const data = {
  name: "leave",
  description: "Disconnects the bot from the voice channel it is in.",
  aliases: ["disconnect", "dc", "dis"],
  hide: false,
  run: run
};