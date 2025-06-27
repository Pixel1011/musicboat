"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const musicHelper_1 = require("../utils/musicHelper");
const Command_1 = require("../Structures/Command");
class LeaveCmd extends Command_1.Command {
    constructor() {
        super();
        this.name = "leave";
        this.description = "Disconnects the bot from the voice channel it is in.";
        this.aliases = ["disconnect", "dc", "dis"];
        this.hide = false;
        this.arguments = [];
    }
    async run(client, data) {
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
}
exports.default = LeaveCmd;
//# sourceMappingURL=leave.js.map