import type { musicBot } from "../client";
import { Command } from "../Structures/Command";
import { musicHelper } from "../utils/musicHelper";
import type { UnifiedData } from "../utils/SlashUnifier";

export default class SkipCmd extends Command {
  constructor() {
    super();
    this.name =  "skip";
    this.description =  "Votes to skip the current playing song.";
    this.aliases =  ["voteskip", "next", "s"];
    this.hide =  false;
    this.arguments =  [];
  }

  async run(client: musicBot, data: UnifiedData) {
    const music = new musicHelper(client, data.guild.id);
    if (!await music.check(data)) return;
    let player = music.getPlayer();
    let vchannel = data.member.voice.channel;
    // main stuff
    let skipsRequired = Math.floor((vchannel.members.size - 1) / 2);

    // check if already sent skip
    if (player.skips.includes(data.author.id)) {
      if (music.PermsOrAloneCheck(data)) {
        return data.send(`**Skipping?** (${player.skips.length}/${skipsRequired} people) \`\`${client.prefix}forceskip\`\` **or** \`\`${client.prefix}fs\`\` **to force**`);
      } else {
        return data.send(`**Skipping?** (${player.skips.length}/${skipsRequired} people)`);
      }
    }

    player.skips.push(data.author.id);
    if (player.skips.length >= skipsRequired) {
      player.skips = [];
      music.skip();
      data.send(":fast_forward: **Skipped** :thumbsup:");
    } else {
      if (music.PermsOrAloneCheck(data)) {
        return data.send(`**Skipping?** (${player.skips.length}/${skipsRequired} people) \`\`${client.prefix}forceskip\`\` **or** \`\`${client.prefix}fs\`\` **to force**`);
      } else {
        return data.send(`**Skipping?** (${player.skips.length}/${skipsRequired} people)`);
      }
    }
  }

}