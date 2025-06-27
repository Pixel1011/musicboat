"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("../Structures/Command");
const musicHelper_1 = require("../utils/musicHelper");
class PauseCmd extends Command_1.Command {
    constructor() {
        super();
        this.name = "pause";
        this.description = "Pauses the current playing track.";
        this.aliases = ["stop"];
        this.hide = false;
        this.arguments = [];
    }
    async run(client, data) {
        const music = new musicHelper_1.musicHelper(client, data.guild.id);
        if (!await music.check(data))
            return;
        let player = music.getPlayer();
        if (player.paused) {
            data.send(":x: **The player is already paused**");
        }
        else {
            await player.pause();
            data.send("**Paused** :pause_button:");
        }
    }
}
exports.default = PauseCmd;
//# sourceMappingURL=pause.js.map