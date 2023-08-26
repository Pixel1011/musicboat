"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = void 0;
const discord_js_1 = require("discord.js");
const musicHelper_1 = require("../utils/musicHelper");
async function run(client, data) {
    const music = new musicHelper_1.musicHelper(client, data.guild.id);
    if (!await music.check(data, true, true, false, false))
        return;
    let player = music.getPlayer();
    let currentSong = player.queue.currentSong;
    if (!currentSong)
        return data.send("no song, check with eval pls");
    let avatarURL = client.user.displayAvatarURL({ size: 4096 });
    let title = currentSong.title;
    let url = currentSong.url;
    let timePlayed = player.position;
    let timePlayedstr = music.time(timePlayed);
    let timeToPlay = currentSong.length;
    let timeToPlaystr = music.time(timeToPlay);
    let requester = currentSong.requester.tag.split("#")[0];
    let dashes = "▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬";
    let dot = "🔘";
    timePlayed = (player.position) / 1000;
    timeToPlay = currentSong.length / 1000;
    let index = Math.floor((timePlayed / timeToPlay) * 30);
    if (index >= 30)
        index = 29;
    dashes = dashes.substr(0, index) + dot + dashes.substr(index + dot.length);
    if (index != 29)
        dashes = dashes.replace(dot, dot + "▬");
    let embed = new discord_js_1.EmbedBuilder();
    embed.setAuthor({ name: "Now Playing :musical_note:", iconURL: avatarURL });
    embed.setThumbnail(currentSong.thumbnail);
    embed.setDescription(`[${title}](${url})\n\n\`\`${dashes}\`\`\n\n\`\`${timePlayedstr} / ${timeToPlaystr}\`\`\n\n \`\`Requested by:\`\` ${requester}`);
    data.send({ embeds: [embed] });
}
exports.data = {
    name: "np",
    description: "Shows what song is currently playing.",
    aliases: ["nowplaying"],
    hide: false,
    arguments: [],
    run: run
};
//# sourceMappingURL=np.js.map