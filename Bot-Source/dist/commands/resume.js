"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("../Structures/Command");
const musicHelper_1 = require("../utils/musicHelper");
class ResumeCmd extends Command_1.Command {
    constructor() {
        super();
        this.name = "resume";
        this.description = "Resumes paused music.";
        this.aliases = ["re", "res", "continue"];
        this.hide = false;
        this.arguments = [];
    }
    async run(client, data) {
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
}
exports.default = ResumeCmd;
//# sourceMappingURL=resume.js.map