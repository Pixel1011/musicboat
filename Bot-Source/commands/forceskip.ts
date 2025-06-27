import { musicHelper } from "../utils/musicHelper";
import type { musicBot } from "../client";
import type { UnifiedData } from "../utils/SlashUnifier";
import { Command } from "../Structures/Command";

export default class ForceskipCmd extends Command { 
  constructor() {
    super();
    this.name =  "forceskip";
    this.description =  "Skips the current playing song immediately.";
    this.aliases =  ["fs", "fskip"];
    this.hide =  false; // hide from help command
    this.arguments =  [];
  }
  
  async run(client: musicBot, data: UnifiedData) {
    const music = new musicHelper(client, data.guild.id);
    if (!await music.check(data)) return;
    if (!await music.PermsOrAloneCheck(data, false, true)) return;

    await music.skip();
    data.send(":fast_forward: **Skipped** :thumbsup:");

  }

}