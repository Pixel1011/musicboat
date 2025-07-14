"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("../Structures/Command");
const musicHelper_1 = require("../utils/musicHelper");
class ShuffleCmd extends Command_1.Command {
    constructor() {
        super();
        this.name = "shuffle";
        this.description = "Toggles whether or not the queue should be played in a random order";
        this.aliases = [];
        this.hide = false;
        this.arguments = [];
    }
    async run(client, data, args) {
        const music = new musicHelper_1.musicHelper(client, data.guild.id);
        if (!await music.check(data))
            return;
        let player = music.getPlayer();
        if (player.shuffle == undefined || player.shuffle == false) {
            player.shuffle = true;
            data.send("🔀 **Enabled shuffle!**");
        }
        else {
            player.shuffle = false;
            data.send("🔀 **Disabled shuffle!**");
        }
        music.save();
    }
}
exports.default = ShuffleCmd;
//# sourceMappingURL=shuffle.js.map