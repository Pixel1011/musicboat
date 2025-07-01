"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const musicHelper_1 = require("../utils/musicHelper");
const discord_js_1 = require("discord.js");
const queue_1 = require("../utils/queue");
const Command_1 = require("../Structures/Command");
class PlayCmd extends Command_1.Command {
    constructor() {
        super();
        this.name = "play";
        this.description = "Plays a song with the given name or url.";
        this.aliases = ["p"];
        this.hide = false;
        this.arguments = [
            new Command_1.ArgOption("term", "Term to be searched from youtube or a youtube/spotify url to video/playlist", false, Command_1.ArgType.STRING)
        ];
    }
    async run(client, data, args) {
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
        if (!player.boundChannel) {
            player.boundChannel = data.channel.id;
        }
        if (!player.queue) {
            player.queue = new queue_1.Queue();
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
            music.registerEvents();
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
        music.registerInactivityStriker(vchannel);
        music.save();
    }
}
exports.default = PlayCmd;
//# sourceMappingURL=play.js.map