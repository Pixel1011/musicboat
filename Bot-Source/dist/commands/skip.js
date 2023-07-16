"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = void 0;
const musicHelper_1 = require("../utils/musicHelper");
async function run(client, data) {
    const music = new musicHelper_1.musicHelper(client, data.guild.id);
    if (!await music.check(data))
        return;
    let player = music.getPlayer();
    let vchannel = data.member.voice.channel;
    let skipsRequired = Math.floor((vchannel.members.size - 1) / 2);
    if (player.skips.includes(data.author.id)) {
        if (music.PermsOrAloneCheck(data)) {
            return data.send(`**Skipping?** (${player.skips.length}/${skipsRequired} people) \`\`${client.prefix}forceskip\`\` **or** \`\`${client.prefix}fs\`\` **to force**`);
        }
        else {
            return data.send(`**Skipping?** (${player.skips.length}/${skipsRequired} people)`);
        }
    }
    player.skips.push(data.author.id);
    if (player.skips.length >= skipsRequired) {
        player.skips = [];
        music.skip();
        data.send(":fast_forward: **Skipped** :thumbsup:");
    }
    else {
        if (music.PermsOrAloneCheck(data)) {
            return data.send(`**Skipping?** (${player.skips.length}/${skipsRequired} people) \`\`${client.prefix}forceskip\`\` **or** \`\`${client.prefix}fs\`\` **to force**`);
        }
        else {
            return data.send(`**Skipping?** (${player.skips.length}/${skipsRequired} people)`);
        }
    }
}
exports.data = {
    name: "skip",
    description: "Votes to skip the current playing song.",
    aliases: ["voteskip", "next", "s"],
    hide: false,
    arguments: [],
    run: run
};
//# sourceMappingURL=skip.js.map