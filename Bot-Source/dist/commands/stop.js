"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("../Structures/Command");
const musicHelper_1 = require("../utils/musicHelper");
class StopCmd extends Command_1.Command {
    constructor() {
        super();
        this.name = "stop";
        this.description = "Stops the bot playing and clears the queue, optionally leaving";
        this.aliases = [];
        this.hide = false;
        this.arguments = [
            new Command_1.ArgOption("leave", "Whether to stay or leave (Default: false)", false, Command_1.ArgType.BOOLEAN)
        ];
    }
    async run(client, data, args) {
        const music = new musicHelper_1.musicHelper(client, data.guild.id);
        if (!await music.check(data))
            return;
        if (!await music.PermsOrAloneCheck(data, true, true))
            return;
        let player = music.getPlayer();
        let toLeave = args.join().toLowerCase();
        if (toLeave == "true" || toLeave == "leave" || toLeave == "yes") {
            music.destroyPlayer();
        }
        else {
            player.queue.songs = [];
            player.loop = false;
            player.queueLoop = false;
            player.shuffle = false;
            await music.skip();
            music.save();
        }
        data.send("🛑 Stopped playing and cleared the queue.");
    }
}
exports.default = StopCmd;
//# sourceMappingURL=stop.js.map