"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = void 0;
const musicHelper_1 = require("../utils/musicHelper");
async function run(client, data) {
    const music = new musicHelper_1.musicHelper(client, data.guild.id);
    let player = music.getPlayer();
    if (!await music.PermsOrAloneCheck(data, true, true))
        return;
    if (!player || (!player.queue.currentSong && !player.queue.lastSong))
        return data.send(":x: **Nothing to replay!**");
    if (player.playing && (player.queue || player.queue.currentSong)) {
        player.seek(0);
        data.send(":musical_note: **Song progress reset** :track_previous:");
    }
    else {
        let lastSong = player.queue.lastSong;
        player.queue.songs.unshift(lastSong);
        player.queue.shift(false);
        player.play(lastSong.track);
        data.send(":musical_note: **Song progress reset** :track_previous:");
    }
}
exports.data = {
    name: "replay",
    description: "Resets the current progress of the song",
    aliases: [""],
    hide: false,
    arguments: [],
    run: run
};
//# sourceMappingURL=replay.js.map