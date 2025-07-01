import { musicHelper } from "../utils/musicHelper";
import type { musicBot } from "../client";
import type { UnifiedData } from "../utils/SlashUnifier";
import { Command } from "../Structures/Command";


export default class LoopCmd extends Command {
  constructor() {
    super();
    this.name =  "loop";
    this.description =  "Toggles looping for the current playing song.";
    this.aliases =  ["repeat"];
    this.hide =  false;
    this.arguments = [];
  
  }
  
  async run(client: musicBot, data: UnifiedData) {
    const music = new musicHelper(client, data.guild.id);
    if (!await music.check(data, true)) return;
    //if (!await music.PermsOrAloneCheck(msg, true, true)) return;
    let player = music.getPlayer();

    if (player.loop == undefined || player.loop == false) {
      player.loop = true;
      data.send(":repeat_one: **Enabled!**");
    } else {
      player.loop = false;
      data.send(":repeat_one: **Disabled!**");
    }
    music.save();
  }

}