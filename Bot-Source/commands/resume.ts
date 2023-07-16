import type { musicBot } from "../client";
import { musicHelper } from "../utils/musicHelper";
import type { UnifiedData } from "../utils/SlashUnifier";


async function run(client: musicBot, data: UnifiedData) {
  const music = new musicHelper(client, data.guild.id);
  if (!await music.check(data)) return;
  let player = music.getPlayer();

  if (player.paused) {
    await player.resume();
    data.send(":play_pause: **Resuming** :thumbsup:");
  } else {
    return data.send(":x: **The player is not paused**");
  }


}
export const data = {
  name: "resume",
  description: "Resumes paused music.",
  aliases: ["re", "res", "continue"],
  hide: false,
  arguments: [],
  run: run
};