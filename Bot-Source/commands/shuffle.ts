import type { musicBot } from "../client";
import { ArgOption, ArgType, Command } from "../Structures/Command";
import { musicHelper } from "../utils/musicHelper";
import type { UnifiedData } from "../utils/SlashUnifier";

export default class ShuffleCmd extends Command {
  constructor() {
    super();
    this.name =  "shuffle";
    this.description =  "Toggles whether or not the queue should be played in a random order";
    this.aliases =  [];
    this.hide =  false;
    this.arguments =  [];
  }

  async run(client: musicBot, data: UnifiedData, args: string[]) {
    const music = new musicHelper(client, data.guild.id);
    if (!await music.check(data)) return;
    let player = music.getPlayer();

    if (player.shuffle == undefined || player.shuffle == false) {
      player.shuffle = true;
      data.send("🔀 **Enabled shuffle!**");
    } else {
      player.shuffle = false;
      data.send("🔀 **Disabled shuffle!**");
    }
    music.save();
  }

}