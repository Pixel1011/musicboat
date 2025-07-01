import type { musicBot } from "../client";
import { ArgOption, ArgType, Command } from "../Structures/Command";
import { musicHelper } from "../utils/musicHelper";
import type { UnifiedData } from "../utils/SlashUnifier";

export default class TestCmd extends Command {
  constructor() {
    super();
    this.name =  "volume",
    this.description =  "Outputs or changes the current volume",
    this.aliases =  ["v", "vol"],
    this.hide =  false,
    this.arguments =  [
      new ArgOption("volume", "Volume to set to (1-2147483647)", false, ArgType.INTEGER)
    ];
  }
  // thanks stackoverflow
  isNumeric(str: string) {
    return !isNaN(Number(str)) && !isNaN(parseFloat(str));
  }

  // i have no idea what the rythm responses to music were so help appreciated
  async run(client : musicBot, data: UnifiedData, args: string[]) {
    const music = new musicHelper(client, data.guild.id);
    if (!await music.check(data, true, false, true, true)) return;
    let player = music.getPlayer();
    let vol = args.join(" ");

    if (vol == "") {
      return data.send(`🎵 **The current volume is at** \`\`${player.volume}%\`\``);
    }
    if (!this.isNumeric(vol)) return data.send(":x: **This value is not a number!**");
    let Ivol = Number(vol);
    if (Ivol > 2147483647) return data.send(":x: **The volume cannot be set this high!**");

    await music.setVolume(Ivol);
    data.send(`🎵 **Set volume to ${vol}%** 👍`);
    music.save();
  
  }

}