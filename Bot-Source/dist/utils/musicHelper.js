"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.musicHelper = void 0;
const rest_1 = require("@lavaclient/types/rest");
const discord_js_1 = require("discord.js");
const queue_1 = require("./queue");
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
        return await this.lavalink.rest.loadTracks(searchTerm);
    }
    async loadSpotify(url) {
        return await this.lavalink.spotify.load(url);
    }
    async join(voiceid) {
        if (this.lavalink.players.get(this.guildid) == null) {
            return await this.lavalink.createPlayer(this.guildid).connect(voiceid);
        }
        else {
            return await this.lavalink.players.get(this.guildid).connect(voiceid);
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
        return this.lavalink.players.get(this.guildid);
    }
    destroyPlayer() {
        let player = this.getPlayer();
        player.destroy();
        player.disconnect();
        if (player.striker != undefined) {
            clearInterval(player.striker.interval);
        }
        player.striker = undefined;
        player.queue = undefined;
        player.loop = false;
        player.queueLoop = false;
        player.setVolume(100);
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
        if (spotify.isSpotifyUrl(args.join(" "))) {
            let results = await this.loadSpotify(args.join(" "));
            switch (results.data.type) {
                case "track": {
                    let track = results;
                    result = await track.resolveYoutubeTrack();
                    result.info.url = results.data.external_urls.spotify;
                    result.info.thumbnail = results.data.album.images[0].url;
                    result.info.title = results.data.name;
                    result.info.spotify = true;
                    break;
                }
                case "playlist": {
                    isPlaylist = true;
                    let playlist = results;
                    for (let i = 0; i < playlist.tracks.length; i++) {
                        if (playlist.tracks[i].data.duration_ms == 0) {
                            playlist.tracks.splice(i, 1);
                            i--;
                            continue;
                        }
                    }
                    tracks = await playlist.resolveYoutubeTracks();
                    let i = 0;
                    for (let t of tracks) {
                        t.info.spotify = true;
                        t.info.url = playlist.tracks[i].data.external_urls.spotify;
                        t.info.thumbnail = playlist.tracks[i].data.album.images[0].url;
                        t.info.title = playlist.tracks[i].data.name;
                        i++;
                    }
                    playlistName = playlist.data.name;
                    totalTracks = tracks.length;
                    playlistThumb = playlist.data.images[0].url;
                    result = tracks[0];
                    break;
                }
            }
        }
        else {
            if (youtubeVideoRegex.test(args.join(" ")) || youtubePlaylistRegex.test(args.join(" ")) || soundcloudTrackRegex.test(args.join(" "))) {
                results = await this.search(args.join(" "));
            }
            else {
                results = await this.search(args.join(" "), "ytsearch:");
            }
            if (results.loadType == rest_1.LoadType.PlaylistLoaded) {
                isPlaylist = true;
                tracks = results.tracks;
                totalTracks = tracks.length;
                playlistName = results.playlistInfo.name;
                playlistThumb = await queue_1.Queue.getThumbnail(tracks[0]);
                let selectedTrack = results.playlistInfo.selectedTrack;
                if (selectedTrack == -1)
                    selectedTrack = 0;
                result = tracks[selectedTrack];
            }
            else if (results.loadType == rest_1.LoadType.TrackLoaded || results.loadType == rest_1.LoadType.SearchResult) {
                result = results.tracks[0];
            }
        }
        return { result, results, isPlaylist, tracks, playlistName, playlistThumb, totalTracks };
    }
}
exports.musicHelper = musicHelper;
//# sourceMappingURL=musicHelper.js.map