"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("../Structures/Command");
const musicHelper_1 = require("../utils/musicHelper");
class SkipCmd extends Command_1.Command {
    constructor() {
        super();
        this.name = "skip";
        this.description = "Votes to skip the current playing song.";
        this.aliases = ["voteskip", "next", "s"];
        this.hide = false;
        this.arguments = [];
    }
    async run(client, data) {
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
}
exports.default = SkipCmd;
//# sourceMappingURL=skip.js.map