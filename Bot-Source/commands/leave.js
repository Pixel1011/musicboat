const musicHelper = require("../utils/musicHelper");
async function run(client, msg) {
  const music = new musicHelper(client, msg.guild.id);
  if (!await music.check(msg, false, false, true, true)) return;
  let player = music.getPlayer();

  if (!msg.guild.me.voice.channelId || !player) {
    return msg.channel.send(`:x: **I am not connected to a voice channel.** Type ${client.prefix}join to get me in one`);
  }

  music.destroyPlayer();
  msg.channel.send("📭 **Successfully disconnected**");

}
module.exports.data = {
  name: "leave",
  description: "Disconnects the bot from the voice channel it is in.",
  aliases: ["disconnect", "dc", "dis"],
  hide: false,
  run: run
};