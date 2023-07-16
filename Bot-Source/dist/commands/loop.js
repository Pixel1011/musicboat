"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = void 0;
const musicHelper_1 = require("../utils/musicHelper");
async function run(client, data) {
    const music = new musicHelper_1.musicHelper(client, data.guild.id);
    if (!await music.check(data, true))
        return;
    let player = music.getPlayer();
    if (player.loop == undefined || player.loop == false) {
        player.loop = true;
        return data.send(":repeat_one: **Enabled!**");
    }
    else {
        player.loop = false;
        return data.send(":repeat_one: **Disabled!**");
    }
}
exports.data = {
    name: "loop",
    description: "Toggles looping for the current playing song.",
    aliases: ["repeat"],
    hide: false,
    arguments: [],
    run: run
};
//# sourceMappingURL=loop.js.map