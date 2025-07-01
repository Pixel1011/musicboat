"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const musicHelper_1 = require("../utils/musicHelper");
const Command_1 = require("../Structures/Command");
class LoopqueueCmd extends Command_1.Command {
    constructor() {
        super();
        this.name = "loopqueue";
        this.description = "Toggles looping for the whole queue.";
        this.aliases = ["qloop", "lq", "queueloop"];
        this.hide = false;
        this.arguments = [];
    }
    async run(client, data) {
        const music = new musicHelper_1.musicHelper(client, data.guild.id);
        if (!await music.check(data, true))
            return;
        let player = music.getPlayer();
        if (player.queueLoop == undefined || player.queueLoop == false) {
            player.queueLoop = true;
            data.send(":repeat: **Queue loop enabled**");
        }
        else {
            player.queueLoop = false;
            data.send(":repeat: **Queue loop disabled**");
        }
        music.save();
    }
}
exports.default = LoopqueueCmd;
//# sourceMappingURL=loopqueue.js.map