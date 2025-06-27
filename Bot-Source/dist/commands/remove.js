"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const musicHelper_1 = require("../utils/musicHelper");
const Command_1 = require("../Structures/Command");
class RemoveCmd extends Command_1.Command {
    constructor() {
        super();
        this.name = "remove";
        this.description = "Removes a certain entry from the queue.";
        this.aliases = ["rm"];
        this.hide = false;
        this.arguments = [
            new Command_1.ArgOption("songnumber", "Song to remove", true, Command_1.ArgType.INTEGER)
        ];
    }
    isInt(value) {
        return !isNaN(value) && parseInt(value) == value && !isNaN(parseInt(value, 10));
    }
    async run(client, data, args) {
        const music = new musicHelper_1.musicHelper(client, data.guild.id);
        if (!await music.check(data, true, true))
            return;
        let player = music.getPlayer();
        let failEmbed = new discord_js_1.EmbedBuilder();
        failEmbed.setTitle(":x: Invalid usage");
        failEmbed.setDescription(`\n${client.prefix}remove [Index / Indices]\nExample: \`\`${client.prefix}remove 1 2 3\`\``);
        if (!args.join()) {
            return data.send({ embeds: [failEmbed] });
        }
        let nums = args;
        let INums = [];
        for (let i in nums) {
            let num = nums[i];
            if (!this.isInt(num) || Number(num) <= 0) {
                data.send({ embeds: [failEmbed] });
                return;
            }
            INums[i] = Number(num);
        }
        let removedSong;
        let songsRemoved = 0;
        for (let i in INums) {
            let num = INums[i] - 1;
            removedSong = player.queue.songs[num];
            if (!music.PermsOrAloneCheck(data, true, false) || removedSong.requester.id != data.author.id) {
                data.send(":x: **The song you attempted to remove either does not exist, or you lack permission to remove songs.**");
                continue;
            }
            player.queue.songs.splice(num, 1);
            songsRemoved++;
        }
        if (nums.length == 1) {
            data.send(`✅ **Removed** \`\`${removedSong.title}\`\``);
        }
        else {
            data.send(`✅ **Removed** \`\`${songsRemoved}\`\` songs`);
        }
    }
}
exports.default = RemoveCmd;
//# sourceMappingURL=remove.js.map