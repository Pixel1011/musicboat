const { Permissions } = require("discord.js");

async function run(client, msg, args) {
  const musicHelper = require("../utils/musicHelper");
  let player = client.lavalink.players.get(msg.guild.id);
  if (!player) {
    return msg.channel.send(":x: **Bot is not currently playing**");
  }
  const music = new musicHelper(client);
  if(!player.playing && !player.queue.currentSong) {
    return msg.channel.send(":x: **Bot is not currently playing**");
  }
  let member = msg.guild.members.get(msg.author.id);
  if(member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES) || member.roles.cache.find(role => role.name == "DJ")) {
    await music.skip(msg.guild.id);
    msg.channel.send(":fast_forward: **Skipped** :thumbsup:");
  }
}
module.exports.data = {
  name: "forceskip",
  description: "Forces the current song to skip without voting",
  aliases: ["fs"],
  hide: false, // hide from help command
  run: run
};