"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const musicHelper_1 = require("../utils/musicHelper");
async function default_1(oldState, newState, client) {
    const sleep = (ms) => new Promise(res => setTimeout(res, ms));
    if (newState.channelId == oldState.channelId)
        return;
    if ((newState.id != client.user.id) || (oldState.id != client.user.id))
        return;
    const music = new musicHelper_1.musicHelper(client, newState.guild.id);
    let player = music.getPlayer();
    if (!player)
        return;
    if (newState.channelId == null) {
        music.destroyPlayer();
    }
    else if ((oldState.channelId != null) && (oldState.channelId != newState.channelId)) {
        await player.pause();
        await player.voice.connect(newState.channelId);
        await sleep(1000);
        await player.resume();
        client.logger.log("handling a move");
    }
}
exports.default = default_1;
//# sourceMappingURL=voiceStateUpdate.js.map