"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerData = void 0;
const queue_1 = require("../utils/queue");
class PlayerData {
    constructor(vcid, bcid, gid, q_songs, q_currentSong, q_lastSong, volume, loop, queueLoop, paused) {
        this.vchannelid = vcid;
        this.guildid = gid;
        this.boundChannelid = bcid;
        this.q_songs = q_songs;
        this.q_currentSong = q_currentSong;
        this.q_lastSong = q_lastSong;
        this.volume = volume;
        this.loop = loop;
        this.queueLoop = queueLoop;
        this.paused = paused;
    }
    async restore(music) {
        if (!this.q_currentSong)
            return;
        let client = music.client;
        let player = await music.join(this.vchannelid);
        let guild = client.guilds.cache.get(this.guildid);
        let tchannel = guild.channels.cache.get(this.boundChannelid);
        let vchannel = guild.channels.cache.get(this.vchannelid);
        player.boundChannel = this.boundChannelid;
        player.queue = new queue_1.Queue();
        player.queue.songs = this.q_songs;
        player.queue.currentSong = this.q_currentSong;
        player.queue.lastSong = this.q_lastSong;
        player.skips = [];
        music.setVolume(this.volume);
        player.loop = this.loop;
        player.queueLoop = this.queueLoop;
        player.play(player.queue.currentSong.encoded);
        if (this.paused) {
            player.pause();
        }
        music.registerEvents();
        music.registerInactivityStriker(vchannel);
        if (tchannel.isSendable()) {
            tchannel.send(`Rejoining \`\`${vchannel.name}\`\` and loaded ${this.q_songs.length + 1} Songs`);
            client.logger.log(`Rejoining \`\`${vchannel.name}\`\` and loaded ${this.q_songs.length + 1} Songs`);
        }
    }
}
exports.PlayerData = PlayerData;
//# sourceMappingURL=PlayerData.js.map