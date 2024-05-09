"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = void 0;
const musicHelper_1 = require("../utils/musicHelper");
const discord_js_1 = require("discord.js");
const queue_1 = require("../utils/queue");
const Command_1 = require("../Structures/Command");
const trackEnd_1 = require("../events/PlayerEvents/trackEnd");
const trackStuck_1 = require("../events/PlayerEvents/trackStuck");
const trackException_1 = require("../events/PlayerEvents/trackException");
async function run(client, data, args) {
    let music = new musicHelper_1.musicHelper(client, data.guild.id);
    let vchannel = data.member.voice.channel;
    let player = music.getPlayer();
    if (!player || !player.queue || !player.queue.currentSong) {
        if (!args.join(" ")) {
            let embed = new discord_js_1.EmbedBuilder();
            embed.setTitle(":x: Invalid usage");
            embed.setDescription(`\n${client.prefix}play [Link or query]`);
            return data.send({
                embeds: [embed]
            });
        }
    }
    else {
        if (!args.join(" ")) {
            if (player.paused) {
                await player.resume();
                data.send(":play_pause: **Resuming** :thumbsup:");
                return;
            }
            else {
                return data.send(":x: **The player is not paused**");
            }
        }
    }
    if (!vchannel) {
        return data.send(":x: **You have to be in a voice channel to use this command.**");
    }
    if ((vchannel.id != data.guild.members.me.voice.channelId) && data.guild.members.me.voice.channelId != null) {
        return data.send(":x: **You have to be in the same voice channel to use this command**");
    }
    if (!vchannel.joinable) {
        return data.send(`:person_gesturing_no: **No permission to join** \`\`${vchannel.name}\`\``);
    }
    if (!vchannel.speakable) {
        return data.send(`:person_gesturing_no: **No permission to speak in** \`\`${vchannel.name}\`\``);
    }
    if (!data.guild.members.me.voice.channelId) {
        player = await music.join(vchannel.id);
        data.send(`:thumbsup: **Joined** \`\`${vchannel.name}\`\` **and bound to** <#${data.channel.id}>`);
    }
    else {
        player = await music.getPlayer();
        if (!player)
            player = await music.join(vchannel.id);
    }
    if (!player.queue) {
        player.queue = new queue_1.Queue(client);
    }
    if (!data.replied) {
        await data.send(`:musical_note: **Searching** :mag_right: \`\`${args.join(" ")}\`\``);
    }
    else {
        await data.channel.send(`:musical_note: **Searching** :mag_right: \`\`${args.join(" ")}\`\``);
    }
    client.logger.log(`Searching: ${args.join(" ")}`);
    let parsed = await music.parseSearch(args);
    let result = parsed.result;
    if (parsed.error) {
        return data.channel.send(`:x: **load failed: debug:** ${await client.logger.logToHaste(JSON.stringify(parsed.exception))}`);
    }
    if (!result) {
        return data.channel.send(":x: **No Matches**");
    }
    if (!player.queue.currentSong) {
        player.skips = [];
        await player.queue.add(result, data.author);
        if (parsed.isPlaylist) {
            let totalTracks = await music.addPlaylist(parsed.tracks, data);
            let timeTillPlaying = "Now!";
            let position = "1";
            await music.sendPlaylistEmbed(data, timeTillPlaying, totalTracks, position, parsed);
        }
        music.setVolume(100);
        player.play(result);
        data.channel.send(`**Playing** :notes: \`\`${result.info.title}\`\` - Now!`);
        if (!player.eventsCreated) {
            let EndClass = new trackEnd_1.TrackEnd(music);
            player.on("trackEnd", async (track, reason) => EndClass.handle(track, reason));
            let ExceptionClass = new trackException_1.TrackException(music);
            player.on("trackException", (track, error) => ExceptionClass.handle(track, error));
            let StuckClass = new trackStuck_1.TrackStuck(music);
            player.on("trackStuck", (track, threshold) => StuckClass.handle(track, threshold));
            player.eventsCreated = true;
        }
    }
    else {
        await player.queue.add(result, data.author);
        let song = player.queue.songs.at(-1);
        let avatarURL = song.requester.avatarURL({ size: 4096 });
        let songLength = music.time(song.length);
        let timeTillPlaying = 0;
        player.queue.songs.forEach(sng => {
            timeTillPlaying = timeTillPlaying + sng.length;
        });
        timeTillPlaying = timeTillPlaying + player.queue.currentSong.length - player.position;
        timeTillPlaying = timeTillPlaying - song.length;
        if (parsed.isPlaylist) {
            let totalTracks = await music.addPlaylist(parsed.tracks, data);
            await music.sendPlaylistEmbed(data, music.time(timeTillPlaying), totalTracks, player.queue.songs.length + 1, parsed);
        }
        else {
            let embed = new discord_js_1.EmbedBuilder();
            embed.setAuthor({ name: "Added to queue", iconURL: avatarURL });
            embed.setDescription(`[**${song.title}**](${song.url})`);
            embed.addFields([
                { name: "Channel", value: song.channel, inline: true },
                { name: "Song Duration", value: songLength, inline: true },
                { name: "Estimated time until playing", value: music.time(timeTillPlaying), inline: true },
                { name: "Position in queue", value: `${player.queue.songs.length}`, inline: true }
            ]);
            embed.setThumbnail(song.thumbnail);
            embed.setColor(0x202225);
            data.channel.send({ embeds: [embed] });
        }
    }
    if (player.striker == undefined) {
        player.striker = {
            guild: data.guild.id,
            strikes: 0,
            interval: this
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
exports.data = {
    name: "play",
    description: "Plays a song with the given name or url.",
    aliases: ["p"],
    hide: false,
    arguments: [
        new Command_1.ArgOption("term", "Term to be searched from youtube or a youtube/spotify url to video/playlist", false, Command_1.ArgType.STRING)
    ],
    run: run
};
//# sourceMappingURL=play.js.map