"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = void 0;
const musicHelper_1 = require("../utils/musicHelper");
async function run(client, data) {
    const music = new musicHelper_1.musicHelper(client, data.guild.id);
    if (!await music.check(data))
        return;
    if (!await music.PermsOrAloneCheck(data, false, true))
        return;
    await music.skip();
    data.send(":fast_forward: **Skipped** :thumbsup:");
}
exports.data = {
    name: "forceskip",
    description: "Skips the current playing song immediately.",
    aliases: ["fs", "fskip"],
    hide: false,
    arguments: [],
    run: run,
};
//# sourceMappingURL=forceskip.js.map