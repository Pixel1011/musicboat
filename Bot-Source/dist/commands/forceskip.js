"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const musicHelper_1 = require("../utils/musicHelper");
const Command_1 = require("../Structures/Command");
class ForceskipCmd extends Command_1.Command {
    constructor() {
        super();
        this.name = "forceskip";
        this.description = "Skips the current playing song immediately.";
        this.aliases = ["fs", "fskip"];
        this.hide = false;
        this.arguments = [];
    }
    async run(client, data) {
        const music = new musicHelper_1.musicHelper(client, data.guild.id);
        if (!await music.check(data))
            return;
        if (!await music.PermsOrAloneCheck(data, false, true))
            return;
        await music.skip();
        data.send(":fast_forward: **Skipped** :thumbsup:");
    }
}
exports.default = ForceskipCmd;
//# sourceMappingURL=forceskip.js.map