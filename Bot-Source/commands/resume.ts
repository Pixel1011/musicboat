import type { musicBot } from "../client";
import { Command } from "../Structures/Command";
import { musicHelper } from "../utils/musicHelper";
import type { UnifiedData } from "../utils/SlashUnifier";

export default class ResumeCmd extends Command {
  constructor() {
    super();
    this.name =  "resume";
    this.description =  "Resumes paused music.";
    this.aliases =  ["re", "res", "continue"];
    this.hide =  false;
    this.arguments =  [];
  
  }

  async run(client: musicBot, data: UnifiedData) {
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
}