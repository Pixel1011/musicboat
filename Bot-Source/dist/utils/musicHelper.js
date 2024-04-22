"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.musicHelper = void 0;
const discord_js_1 = require("discord.js");
class musicHelper {
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
            if (!player.playing && (!player.queue || !player.queue.currentSong)) {
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
    async loadSpotify(url) {
        return await this.lavalink.spotify.load(url);
    }
    async join(voiceid) {
        if (!this.getPlayer()) {
            return await this.lavalink.players.create(this.guildid).voice.connect(voiceid);
        }
        else {
            return await this.getPlayer().voice.connect(voiceid);
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
        player.setVolume(100);
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
        let spotify = this.lavalink.spotify;
        let results;
        let result;
        let isPlaylist = false;
        let tracks;
        let playlistName = "";
        let playlistThumb = "";
        let totalTracks = 0;
        let youtubeVideoRegex = /(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w\-_]+)\\&?/;
        let youtubePlaylistRegex = /^.*(youtu.be\/|list=)([^#&?]*).*/;
        let soundcloudTrackRegex = /^https?:\/\/(soundcloud\.com|snd\.sc)\/(.*)$/;
        return { result, results, isPlaylist, tracks, playlistName, playlistThumb, totalTracks };
    }
}
exports.musicHelper = musicHelper;
//# sourceMappingURL=musicHelper.js.map