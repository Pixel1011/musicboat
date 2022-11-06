import type { musicBot } from "../client";
import { ArgOption, ArgType } from "../Structures/Command";
import { musicHelper } from "../utils/musicHelper";
import type { UnifiedData } from "../utils/SlashUnifier";

// thanks stackoverflow
function isNumeric(str: string) {
  return !isNaN(Number(str)) && !isNaN(parseFloat(str));
}

// i have no idea what the rythm responses to music were so help appreciated
async function run(client : musicBot, data: UnifiedData, args: string[]) {
  const music = new musicHelper(client, data.guild.id);
  if (!await music.check(data, true, false, true, true)) return;
  let player = music.getPlayer();
  let vol = args.join(" ");

  if (vol == "") {
    return data.send(`🎵 **The current volume is at** \`\`${player.volume}%\`\``);
  }
  if (!isNumeric(vol)) return data.send(":x: **This value is not a number!**");
  let Ivol = Number(vol);
  if (Ivol > 2147483647) return data.send(":x: **The volume cannot be set this high!**");

  await player.setVolume(Ivol);
  return data.send(`🎵 **Set volume to ${vol}%** 👍`);
  
}

export const data = {
  name: "volume",
  description: "Outputs or changes the current volume",
  aliases: ["v", "vol"],
  hide: false,
  arguments: [
    new ArgOption("volume", "Volume to set to (1-2147483647)", false, ArgType.INTEGER)
  ],
  run: run
};