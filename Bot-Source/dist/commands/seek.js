"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const musicHelper_1 = require("../utils/musicHelper");
const Command_1 = require("../Structures/Command");
const discord_js_1 = require("discord.js");
class SeekCmd extends Command_1.Command {
    constructor() {
        super();
        this.name = "seek";
        this.description = "Goes to a specified time in a song";
        this.aliases = [];
        this.hide = false;
        this.arguments = [
            new Command_1.ArgOption("time", "time in format of hh:mm:ss, mm:ss or ss", true, Command_1.ArgType.STRING)
        ];
    }
    isInt(value) {
        return !isNaN(value) && parseInt(value) == value && !isNaN(parseInt(value, 10));
    }
    validateTimestr(split) {
        if (split.length > 3)
            return false;
        for (let i = 0; i < split.length; i++) {
            if (!this.isInt(split[i]))
                return false;
        }
        return true;
    }
    async run(client, data, args) {
        const music = new musicHelper_1.musicHelper(client, data.guild.id);
        if (!await music.check(data, true))
            return;
        let player = music.getPlayer();
        let timestr = args.join("").toLowerCase();
        let split = timestr.split(":");
        let failEmbed = new discord_js_1.EmbedBuilder();
        failEmbed.setTitle(":x: Invalid usage");
        failEmbed.setDescription(`\n${client.prefix}seek [HH:MM:SS/MM:SS/S]\nExample: \`\`${client.prefix}seek 1:23\`\``);
        if (!timestr || !this.validateTimestr(split)) {
            return data.send({ embeds: [failEmbed] });
        }
        let time = 0;
        let hours, mins, secs;
        if (split.length == 3) {
            hours = split[0];
            mins = split[1];
            secs = split[2];
        }
        else if (split.length == 2) {
            mins = split[0];
            secs = split[1];
        }
        else if (split.length == 1) {
            secs = split[0];
        }
        if (hours)
            time += parseInt(hours) * 60 * 60;
        if (mins)
            time += parseInt(mins) * 60;
        if (secs)
            time += parseInt(secs);
        if (time * 1000 > player.queue.currentSong.length) {
            time = player.queue.currentSong.length / 1000;
        }
        player.seek(time * 1000);
        data.send(`⏩ Skipped to \`\`${music.time(time * 1000)}\`\``);
    }
}
exports.default = SeekCmd;
//# sourceMappingURL=seek.js.map