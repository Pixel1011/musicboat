import { musicHelper } from "../utils/musicHelper";
import type { musicBot } from "../client";
import type { UnifiedData } from "../utils/SlashUnifier";

async function run(client: musicBot, data: UnifiedData) {
  const music = new musicHelper(client, data.guild.id);
  if (!await music.check(data, true)) return;
  let player = music.getPlayer();

  if (player.queueLoop == undefined || player.queueLoop == false) {
    player.queueLoop = true;
    return data.send("🔁 **Queue loop enabled**");
  } else {
    player.queueLoop = false;
    return data.send("🔁 **Queue loop disabled**");
  }




}
export const data = {
  name: "loopqueue",
  description: "Toggles looping for the whole queue.",
  aliases: ["qloop", "lq", "queueloop"],
  hide: false,
  arguments: [],
  run: run
};