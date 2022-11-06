import { musicHelper } from "../utils/musicHelper";
import type { musicBot } from "../client";
import type { UnifiedData } from "../utils/SlashUnifier";

async function run(client: musicBot, data: UnifiedData) {
  const music = new musicHelper(client, data.guild.id);
  if (!await music.check(data)) return;
  if (!await music.PermsOrAloneCheck(data, false, true)) return;

  await music.skip();
  data.send(":fast_forward: **Skipped** :thumbsup:");

}
export const data = {
  name: "forceskip",
  description: "Skips the current playing song immediately.",
  aliases: ["fs", "fskip"],
  hide: false, // hide from help command
  arguments: [],
  run: run,
};