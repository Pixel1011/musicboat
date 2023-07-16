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
        await player.resume();
        data.send(":play_pause: **Resuming** :thumbsup:");
    }
    else {
        return data.send(":x: **The player is not paused**");
    }
}
exports.data = {
    name: "resume",
    description: "Resumes paused music.",
    aliases: ["re", "res", "continue"],
    hide: false,
    arguments: [],
    run: run
};
//# sourceMappingURL=resume.js.map