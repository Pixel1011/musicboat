import type { Message } from "discord.js";
import type { musicBot } from "../client";
import { musicHelper } from "../utils/musicHelper";


async function run(client: musicBot, msg: Message) {
  const music = new musicHelper(client, msg.guild.id);
  if (!await music.check(msg)) return;
  let player = music.getPlayer();

  if (player.paused) {
    await player.resume();
    msg.channel.send("⏯ **Resuming** 👍");
  } else {
    return msg.channel.send(":x: **The player is not paused**");
  }


}
export const data = {
  name: "resume",
  description: "Resumes paused music.",
  aliases: ["re", "res", "continue"],
  hide: false,
  run: run
};