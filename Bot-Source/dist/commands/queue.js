"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const musicHelper_1 = require("../utils/musicHelper");
const Command_1 = require("../Structures/Command");
const interactions_1 = require("../utils/interactions");
class QueueCmd extends Command_1.Command {
    constructor() {
        super();
        this.name = "queue";
        this.description = "Shows the server's music queue";
        this.aliases = ["q"];
        this.hide = false;
        this.arguments = [
            new Command_1.ArgOption("page", "Page number to list (Default: 1)", false, Command_1.ArgType.INTEGER)
        ];
    }
    async run(client, data, args) {
        const music = new musicHelper_1.musicHelper(client, data.guild.id);
        if (!await music.check(data, true, true, false, false))
            return;
        let player = music.getPlayer();
        let pages = Math.ceil(player.queue.songs.length / 10);
        if (pages == 0)
            pages = 1;
        let page = 1;
        if (args.join(" "))
            page = Number(args.join(" "));
        if (isNaN(page))
            page = 1;
        if (page > pages)
            return data.send(`:x: **There is no page \`\`${page}\`\`**`);
        let rightDisabled = false;
        if (pages == 1)
            rightDisabled = true;
        let leftDisabled = false;
        if (page == pages)
            leftDisabled = true;
        let disabledMap = new Map([["cancel", false], ["left", leftDisabled], ["right", rightDisabled]]);
        let row = (0, interactions_1.getPagesRow)(disabledMap, false);
        let original = await data.send({ embeds: [this.getEmbed(client, data, player, music, page, pages)], components: [row.toJSON()] });
        let filter = async (inter) => inter.customId !== undefined && inter.user.id === data.author.id && inter.message.id == original.id;
        let compCollector = original.createMessageComponentCollector({ filter: filter, time: 300000 });
        let thisgetembed = this.getEmbed;
        compCollector.on("collect", async (inter) => {
            let id = inter.customId;
            if (id == "right") {
                page++;
                if (page > pages)
                    page = pages;
                if (page + 1 > pages) {
                    disabledMap.set("right", true);
                }
                disabledMap.set("left", false);
                let row = (0, interactions_1.getPagesRow)(disabledMap, false).toJSON();
                let newembed = thisgetembed(client, data, player, music, page, pages);
                original.edit({ embeds: [newembed], components: [row] });
                await inter.deferUpdate();
            }
            else if (id == "left") {
                page--;
                if (page < 1)
                    page = 1;
                if (page - 1 < 1) {
                    disabledMap.set("left", true);
                }
                disabledMap.set("right", false);
                let row = (0, interactions_1.getPagesRow)(disabledMap, false).toJSON();
                let newembed = thisgetembed(client, data, player, music, page, pages);
                original.edit({ embeds: [newembed], components: [row] });
                await inter.deferUpdate();
            }
        });
        compCollector.on("end", (collected) => {
            original.edit({ components: [] });
        });
    }
    static songString(song, guild) {
        let songname = song.title;
        let link = song.url;
        let timeToPlay = song.length;
        let timeToPlayMin = Math.floor(timeToPlay / 1000 / 60);
        let timeToPlaySec = Math.floor(timeToPlay / 1000 - (timeToPlayMin * 60)).toLocaleString("en-GB", { minimumIntegerDigits: 2 });
        let time = `${timeToPlayMin}:${timeToPlaySec}`;
        if (song.isStream)
            time = "LIVE";
        let displayName = guild.members.cache.get(song.requester.id).displayName;
        return `[${songname}](${link}) | \`${time} Requested by: ${displayName}\``;
    }
    getEmbed(client, data, player, music, page, pages) {
        let currentSong = player.queue.currentSong;
        let desc = [];
        if (page == 1) {
            desc.push("__Now Playing:__");
            desc.push(QueueCmd.songString(currentSong, data.guild));
        }
        if (player.queue.songs[0]) {
            if (page == 1)
                desc.push("\n__Up Next:__");
            for (let i = (page * 10) - 10; i < (page * 10); i++) {
                let song = player.queue.songs[i];
                if (!song)
                    break;
                desc.push("\n" + `\`\`${i + 1}.\`\` ` + QueueCmd.songString(song, data.guild));
            }
            let queueLength = 0;
            player.queue.songs.forEach(sng => {
                queueLength = queueLength + sng.length;
            });
            let text = player.queue.songs.length > 1 ? "songs" : "song";
            desc.push("\n" + `**${player.queue.songs.length} ${text} in queue | ${music.time(queueLength)} total length**`);
        }
        let loopEmote = "❌";
        if (player.loop)
            loopEmote = "✅";
        let queueLoopEmote = "❌";
        if (player.queueLoop)
            queueLoopEmote = "✅";
        let shuffleEmote = "❌";
        if (player.shuffle)
            shuffleEmote = "✅";
        let embed = new discord_js_1.EmbedBuilder();
        embed.setTitle(`Queue for ${data.guild.name}`);
        embed.setURL(client.config.website);
        embed.setDescription(desc.join("\n"));
        embed.setFooter({
            text: `Page ${page}/${pages} | Loop: ${loopEmote} | Queue Loop: ${queueLoopEmote} | Shuffle: ${shuffleEmote}`,
            iconURL: data.author.avatarURL({ size: 2048 })
        });
        return embed;
    }
}
exports.default = QueueCmd;
//# sourceMappingURL=queue.js.map