import { musicHelper } from "../utils/musicHelper";
import type { musicBot } from "../client";
import type { UnifiedData } from "../utils/SlashUnifier";

async function run(client: musicBot, data: UnifiedData) {
  const music = new musicHelper(client, data.guild.id);
  if (!await music.check(data, true)) return;
  //if (!await music.PermsOrAloneCheck(msg, true, true)) return;
  let player = music.getPlayer();

  if (player.loop == undefined || player.loop == false) {
    player.loop = true;
    return data.send(":repeat_one: **Enabled!**");
  } else {
    player.loop = false;
    return data.send(":repeat_one: **Disabled!**");
  }




}
export const data = {
  name: "loop",
  description: "Toggles looping for the current playing song.",
  aliases: ["repeat"],
  hide: false,
  arguments: [],
  run: run
};