"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = void 0;
const musicHelper_1 = require("../utils/musicHelper");
async function run(client, data) {
    const music = new musicHelper_1.musicHelper(client, data.guild.id);
    if (!await music.check(data, true))
        return;
    let player = music.getPlayer();
    if (player.queueLoop == undefined || player.queueLoop == false) {
        player.queueLoop = true;
        return data.send(":repeat: **Queue loop enabled**");
    }
    else {
        player.queueLoop = false;
        return data.send(":repeat: **Queue loop disabled**");
    }
}
exports.data = {
    name: "loopqueue",
    description: "Toggles looping for the whole queue.",
    aliases: ["qloop", "lq", "queueloop"],
    hide: false,
    arguments: [],
    run: run
};
//# sourceMappingURL=loopqueue.js.map