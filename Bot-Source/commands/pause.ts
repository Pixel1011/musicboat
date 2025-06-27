import type { musicBot } from "../client";
import { Command } from "../Structures/Command";
import { musicHelper } from "../utils/musicHelper";
import type { UnifiedData } from "../utils/SlashUnifier";

export default class PauseCmd extends Command {
  constructor() {
    super();
    this.name =  "pause";
    this.description =  "Pauses the current playing track.";
    this.aliases =  ["stop"];
    this.hide =  false;
    this.arguments =  [];
  }

  async run(client: musicBot, data: UnifiedData) {
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
  
}