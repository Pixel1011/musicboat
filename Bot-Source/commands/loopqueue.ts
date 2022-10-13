import { musicHelper } from "../utils/musicHelper";
import type { Message } from "discord.js";
import type { musicBot } from "../client";

async function run(client: musicBot, msg: Message) {
  const music = new musicHelper(client, msg.guild.id);
  if (!await music.check(msg, true)) return;
  let player = music.getPlayer();

  if (player.queueLoop == undefined || player.queueLoop == false) {
    player.queueLoop = true;
    return msg.channel.send("🔁 **Queue loop enabled**");
  } else {
    player.queueLoop = false;
    return msg.channel.send("🔁 **Queue loop disabled**");
  }




}
export const data = {
  name: "loopqueue",
  description: "Toggles looping for the whole queue.",
  aliases: ["qloop", "lq", "queueloop"],
  hide: false,
  run: run
};