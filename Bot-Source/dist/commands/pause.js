"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = void 0;
const musicHelper_1 = require("../utils/musicHelper");
async function run(client, data) {
    const music = new musicHelper_1.musicHelper(client, data.guild.id);
    if (!await music.check(data))
        return;
    let player = music.getPlayer();
    if (player.paused) {
        data.send(":x: **The player is already paused**");
    }
    else {
        await player.pause();
        data.send("**Paused** ⏸");
    }
}
exports.data = {
    name: "pause",
    description: "Pauses the current playing track.",
    aliases: ["stop"],
    hide: false,
    arguments: [],
    run: run
};
//# sourceMappingURL=pause.js.map