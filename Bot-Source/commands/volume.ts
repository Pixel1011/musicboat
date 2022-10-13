import type { Message } from "discord.js";
import type { musicBot } from "../client";
import { musicHelper } from "../utils/musicHelper";

// thanks stackoverflow
function isNumeric(str: string) {
  return !isNaN(Number(str)) && !isNaN(parseFloat(str));
}

// i have no idea what the rythm responses to music were so help appreciated
async function run(client : musicBot, msg: Message, args: string[]) {
  const music = new musicHelper(client, msg.guild.id);
  if (!await music.check(msg, true, false, true, true)) return;
  let player = music.getPlayer();
  let vol = args.join(" ");

  if (vol == "") {
    return msg.channel.send(`🎵 **The current volume is at** \`\`${player.volume}%\`\``);
  }
  if (!isNumeric(vol)) return msg.channel.send(":x: **This value is not a number!**");
  let Ivol = Number(vol);
  if (Ivol > 2147483647) return msg.channel.send(":x: **The volume cannot be set this high!**");

  await player.setVolume(Ivol);
  return msg.channel.send(`🎵 **Set volume to ${vol}%** 👍`);




}

export const data = {
  name: "volume",
  description: "Outputs or changes the current volume",
  aliases: ["v", "vol"],
  hide: false,
  run: run
};