import type { musicBot } from "../client";
import { musicHelper } from "../utils/musicHelper";
import type { UnifiedData } from "../utils/SlashUnifier";

async function run(client: musicBot, data: UnifiedData) {
  const music = new musicHelper(client, data.guild.id);
  if (!await music.check(data)) return;
  let player = music.getPlayer();

  if (player.paused) {
    data.send(":x: **The player is already paused**");
  } else {
    await player.pause();
    data.send("**Paused** :pause_button:");
  }


}
export const data = {
  name: "pause",
  description: "Pauses the current playing track.",
  aliases: ["stop"],
  hide: false,
  arguments: [],
  run: run
};