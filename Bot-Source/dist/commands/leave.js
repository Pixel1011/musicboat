"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = void 0;
const musicHelper_1 = require("../utils/musicHelper");
async function run(client, data) {
    const music = new musicHelper_1.musicHelper(client, data.guild.id);
    if (!await music.check(data, false, false, true, true))
        return;
    let player = music.getPlayer();
    if (!data.guild.members.me.voice.channelId || !player) {
        return data.send(`:x: **I am not connected to a voice channel.** Type ${client.prefix}join to get me in one`);
    }
    music.destroyPlayer();
    data.send(":mailbox_with_no_mail: **Successfully disconnected**");
}
exports.data = {
    name: "leave",
    description: "Disconnects the bot from the voice channel it is in.",
    aliases: ["disconnect", "dc", "dis"],
    hide: false,
    arguments: [],
    run: run
};
//# sourceMappingURL=leave.js.map