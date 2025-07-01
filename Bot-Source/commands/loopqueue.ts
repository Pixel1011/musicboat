import { musicHelper } from "../utils/musicHelper";
import type { musicBot } from "../client";
import type { UnifiedData } from "../utils/SlashUnifier";
import { Command } from "../Structures/Command";

export default class LoopqueueCmd extends Command {
  constructor() {
    super();
    this.name =  "loopqueue";
    this.description =  "Toggles looping for the whole queue.";
    this.aliases =  ["qloop", "lq", "queueloop"];
    this.hide =  false;
    this.arguments = [];
  
  }

  async run(client: musicBot, data: UnifiedData) {
    const music = new musicHelper(client, data.guild.id);
    if (!await music.check(data, true)) return;
    let player = music.getPlayer();

    if (player.queueLoop == undefined || player.queueLoop == false) {
      player.queueLoop = true;
      data.send(":repeat: **Queue loop enabled**");
    } else {
      player.queueLoop = false;
      data.send(":repeat: **Queue loop disabled**");
    }
    music.save();
  }
}