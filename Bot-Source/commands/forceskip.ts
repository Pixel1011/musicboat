import { musicHelper } from "../utils/musicHelper";
import type { Message } from "discord.js";
import type { musicBot } from "../client";

async function run(client: musicBot, msg: Message, args: string[]) {
  const music = new musicHelper(client, msg.guild.id);
  if (!await music.check(msg)) return;
  if (!await music.PermsOrAloneCheck(msg, false, true)) return;

  await music.skip();
  msg.channel.send(":fast_forward: **Skipped** :thumbsup:");

}
export const data = {
  name: "forceskip",
  description: "Skips the current playing song immediately.",
  aliases: ["fs", "fskip"],
  hide: false, // hide from help command
  run: run
};