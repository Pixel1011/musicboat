"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("../Structures/Command");
const musicHelper_1 = require("../utils/musicHelper");
class ReplayCmd extends Command_1.Command {
    constructor() {
        super();
        this.name = "replay";
        this.description = "Resets the current progress of the song";
        this.aliases = [""];
        this.hide = false;
        this.arguments = [];
    }
    async run(client, data) {
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
            player.play(lastSong.encoded);
            data.send(":musical_note: **Song progress reset** :track_previous:");
            music.save();
        }
    }
}
exports.default = ReplayCmd;
//# sourceMappingURL=replay.js.map