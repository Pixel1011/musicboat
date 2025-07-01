"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const musicHelper_1 = require("../utils/musicHelper");
const Command_1 = require("../Structures/Command");
class LoopCmd extends Command_1.Command {
    constructor() {
        super();
        this.name = "loop";
        this.description = "Toggles looping for the current playing song.";
        this.aliases = ["repeat"];
        this.hide = false;
        this.arguments = [];
    }
    async run(client, data) {
        const music = new musicHelper_1.musicHelper(client, data.guild.id);
        if (!await music.check(data, true))
            return;
        let player = music.getPlayer();
        if (player.loop == undefined || player.loop == false) {
            player.loop = true;
            data.send(":repeat_one: **Enabled!**");
        }
        else {
            player.loop = false;
            data.send(":repeat_one: **Disabled!**");
        }
        music.save();
    }
}
exports.default = LoopCmd;
//# sourceMappingURL=loop.js.map