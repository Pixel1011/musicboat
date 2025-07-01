"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.musicHelper = void 0;
const discord_js_1 = require("discord.js");
const queue_1 = require("./queue");
const trackEnd_1 = require("../events/PlayerEvents/trackEnd");
const trackException_1 = require("../events/PlayerEvents/trackException");
const trackStuck_1 = require("../events/PlayerEvents/trackStuck");
const PlayerData_1 = require("./PlayerData");
const fs_1 = __importDefault(require("fs"));
const zlib_1 = __importDefault(require("zlib"));
class musicHelper {
    static { this.playerfilepath = "./cache/playing.json"; }
    constructor(client, guildid) {
        this.client = client;
        this.guildid = guildid;
        this.lavalink = client.lavalink;
    }
    async check(data, checkPlayer, checkPlaying, checkVC, checkSameVC) {
        if (checkPlaying == undefined)
            checkPlaying = true;
        if (checkPlayer == undefined)
            checkPlayer = true;
        if (checkVC == undefined)
            checkVC = true;
        if (checkSameVC == undefined)
            checkSameVC = true;
        let vchannel = data.member.voice.channel;
        let player = this.getPlayer();
        if (checkPlaying) {
            if (!player) {
                data.send(":x: **Bot is not currently playing**");
                return false;
            }
        }
        if (checkPlayer) {
            if (!player || (!player.playing && (!player.queue || !player.queue.currentSong))) {
                data.send(":x: **Bot is not currently playing**");
                return false;
            }
        }
        if (checkVC) {
            if (!vchannel) {
                data.send(":x: **You have to be in a voice channel to use this command.**");
                return false;
            }
        }
        if (checkSameVC) {
            if ((vchannel.id != data.guild.members.me.voice.channelId) && data.guild.members.me.voice.channelId != null) {
                data.send(":x: **You have to be in the same voice channel to use this command**");
                return false;
            }
        }
        return true;
    }
    async PermsOrAloneCheck(data, checkAlone, sendMsgs) {
        if (!checkAlone)
            checkAlone = false;
        if (!sendMsgs)
            sendMsgs = false;
        let member = data.guild.members.cache.get(data.author.id);
        let vchannel = data.member.voice.channel;
        let hasPerms = member.permissions.has(discord_js_1.PermissionFlagsBits.ManageChannels) || member.roles.cache.find(role => role.name == "DJ");
        if (checkAlone) {
            if (hasPerms || vchannel.members.size == 2)
                return true;
            if (sendMsgs)
                data.send(":x: **This command requires you to either have a role named ``DJ`` or the ``Manage Channels`` permission to use it** (being alone with the bot also works)");
            return false;
        }
        else {
            if (hasPerms)
                return true;
            if (sendMsgs)
                data.send(":x: **This command requires you to either have a role named ``DJ`` or the ``Manage Channels`` permission to use it**");
            return false;
        }
    }
    async search(searchTerm, type) {
        if (!type)
            type = "";
        searchTerm = type + searchTerm;
        return await this.lavalink.api.loadTracks(searchTerm);
    }
    async join(voiceid) {
        if (!this.getPlayer()) {
            await this.lavalink.players.create(this.guildid).voice.connect(voiceid);
            return this.getPlayer();
        }
        else {
            await this.getPlayer().voice.connect(voiceid);
            return this.getPlayer();
        }
    }
    async skip() {
        let player = this.getPlayer();
        if (player.loop) {
            await player.queue.shift(player.queueLoop);
        }
        await player.stop();
    }
    getPlayer() {
        return this.lavalink.players.cache.get(this.guildid);
    }
    async destroyPlayer() {
        let player = this.getPlayer();
        player.voice.disconnect();
        if (player.striker != undefined) {
            clearInterval(player.striker.interval);
        }
        player.striker = undefined;
        player.queue = undefined;
        player.loop = false;
        player.queueLoop = false;
        player.boundChannel = undefined;
        this.setVolume(100);
        this.save(true);
        this.lavalink.players.destroy(this.guildid);
    }
    time(ms) {
        var mins = Math.floor(ms / 1000 / 60);
        var secs = Math.floor(ms / 1000 - (mins * 60)).toLocaleString("en-GB", { minimumIntegerDigits: 2 });
        if (mins < 60)
            return `${mins}:${secs}`;
        var hours = Math.floor(mins / 60);
        mins = Math.floor(mins - (hours * 60));
        if (hours < 24)
            return `${hours.toLocaleString("en-GB", { minimumIntegerDigits: 2 })}:${mins.toLocaleString("en-GB", { minimumIntegerDigits: 2 })}:${secs}`;
        var days = Math.floor(hours / 24);
        hours = Math.floor(hours - (days * 24));
        return `${days.toLocaleString("en-GB", { minimumIntegerDigits: 1 })}:${hours.toLocaleString("en-GB", { minimumIntegerDigits: 2 })}:${mins.toLocaleString("en-GB", { minimumIntegerDigits: 2 })}:${secs}`;
    }
    async parseSearch(args) {
        let results;
        let returnVals = {
            result: undefined,
            error: false,
            exception: undefined,
            isPlaylist: false,
            tracks: [],
            playlistName: "",
            playlistThumb: ""
        };
        let urlregex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?(?=.*v=\w+)(?:\S+)?v=|embed\/|v\/|watch\?v=|youtube.com\/\S+\/|youtube.com\/c\/\S+\/|youtu\.be\/|playlist\?list=)([\w-]+)|youtu\.be\/([\w-]+))|(?:https?:\/\/)?(?:open\.spotify\.com\/(track|album|playlist)\/|spotify:(track|album|playlist):)([\w\d]+)|(?:https?:\/\/)?(?:www\.)?(?:soundcloud\.com\/(?:[\w\d-]+\/)?(?:sets\/)?|soundcloud.app.goo.gl\/)([\w\d-]+)\/([\w\d-]+)/gm;
        if (urlregex.test(args.join(" "))) {
            results = await this.search(args.join(" ").trim());
        }
        else {
            results = await this.search(args.join(" "), "ytsearch:");
        }
        switch (results.loadType) {
            case "track": {
                returnVals.result = results.data;
                break;
            }
            case "playlist": {
                returnVals.isPlaylist = true;
                let playlist = results;
                returnVals.playlistName = playlist.data.info.name;
                if (playlist.data.tracks[0].info.sourceName == "spotify") {
                    returnVals.playlistThumb = playlist.data.pluginInfo.artworkUrl;
                }
                else {
                    returnVals.playlistThumb = queue_1.Queue.getThumbnail(playlist.data.tracks[0]);
                }
                let tracks = [...playlist.data.tracks];
                for (let i = 0; i < tracks.length; i++) {
                    if (tracks[i].info.length == 0) {
                        tracks.splice(i, 1);
                        i--;
                        continue;
                    }
                }
                let firstTrackidx = results.data.info.selectedTrack;
                if (firstTrackidx == -1)
                    firstTrackidx = 0;
                returnVals.result = tracks[firstTrackidx];
                tracks.splice(firstTrackidx, 1);
                if (firstTrackidx != 0) {
                    tracks = tracks.concat(tracks.splice(0, firstTrackidx));
                }
                returnVals.tracks = tracks;
                break;
            }
            case "search": {
                returnVals.result = results.data[0];
                break;
            }
            case "empty": {
                break;
            }
            case "error": {
                returnVals.error = true;
                returnVals.exception = results.data;
                break;
            }
        }
        return returnVals;
    }
    async addPlaylist(tracks, data) {
        let totalTracks = 1;
        for (let i = 0; i < tracks.length; i++) {
            let t = tracks[i];
            if (!t)
                continue;
            await this.getPlayer().queue.add(t, data.author);
            totalTracks++;
        }
        return totalTracks;
    }
    async sendPlaylistEmbed(data, timeTillPlaying, totalTracks, position, parsed) {
        let avatarURL = data.author.avatarURL({ size: 4096 });
        let embed = new discord_js_1.EmbedBuilder();
        embed.setAuthor({ name: "Playlist added to queue", iconURL: avatarURL });
        embed.setDescription(`**${parsed.playlistName}**`);
        embed.addFields([
            { name: "Estimated time until playing", value: timeTillPlaying, inline: true },
            { name: "Position in queue", value: `${position}`, inline: true },
            { name: "Enqueued", value: `\`\`${totalTracks}\`\` songs`, inline: true }
        ]);
        embed.setThumbnail(parsed.playlistThumb);
        embed.setColor(0x202225);
        data.channel.send({ embeds: [embed] });
    }
    async setVolume(volume) {
        let player = this.getPlayer();
        player.setVolume(volume);
    }
    registerEvents() {
        let player = this.getPlayer();
        if (!player.eventsCreated) {
            let EndClass = new trackEnd_1.TrackEnd(this);
            player.on("trackEnd", async (track, reason) => EndClass.handle(track, reason));
            let ExceptionClass = new trackException_1.TrackException(this);
            player.on("trackException", (track, error) => ExceptionClass.handle(track, error));
            let StuckClass = new trackStuck_1.TrackStuck(this);
            player.on("trackStuck", (track, threshold) => StuckClass.handle(track, threshold));
            player.eventsCreated = true;
        }
    }
    registerInactivityStriker(vchannel) {
        let player = this.getPlayer();
        let music = this;
        if (player.striker == undefined) {
            player.striker = {
                guild: this.guildid,
                strikes: 0,
                interval: null
            };
            let interval = setInterval(function () {
                if (player.playing && vchannel.members.size > 1)
                    return player.striker.strikes = 0;
                player.striker.strikes++;
                if (player.striker.strikes == 10) {
                    music.destroyPlayer();
                }
            }, 2 * 60 * 1000);
            player.striker.interval = interval;
        }
    }
    async save(destroy = false) {
        let player = this.getPlayer();
        if (!destroy) {
            let saveobj = new PlayerData_1.PlayerData(player.voice.channelId, player.boundChannel, this.guildid, player.queue.songs, player.queue.currentSong, player.queue.lastSong, player.volume, player.loop, player.queueLoop, player.paused);
            this.client.playerBackups.set(this.guildid, saveobj);
        }
        else {
            this.client.playerBackups.delete(this.guildid);
        }
        let directory = musicHelper.playerfilepath.split("playing.json")[0];
        if (!fs_1.default.existsSync(directory)) {
            fs_1.default.mkdirSync(directory, { recursive: true });
        }
        let gzpath = musicHelper.playerfilepath.replace(".json", ".json.gz");
        if (!fs_1.default.existsSync(gzpath)) {
            fs_1.default.writeFileSync(gzpath, "{}");
        }
        let content = fs_1.default.readFileSync(gzpath);
        let toWrite = JSON.stringify(this.client.playerBackups, (key, value) => {
            if (value instanceof Map) {
                return {
                    dataType: "Map",
                    value: Array.from(value.entries()),
                };
            }
            else {
                return value;
            }
        });
        let toWritegz = zlib_1.default.gzipSync(toWrite);
        if (content != toWritegz) {
            fs_1.default.writeFileSync(gzpath, toWritegz);
        }
    }
}
exports.musicHelper = musicHelper;
//# sourceMappingURL=musicHelper.js.map