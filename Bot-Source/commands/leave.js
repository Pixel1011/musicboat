const musicHelper = require("../utils/musicHelper");
async function run(client, msg) {
  const music = new musicHelper(client, msg.guild.id);
  let check = await music.check(msg, false, false, true, true); if(check == false) return;
  let player = music.getPlayer();

  if(!msg.guild.me.voice.channelId || !player) {
    return msg.channel.send(`:x: **I am not connected to a voice channel.** Type ${client.prefix}join to get me in one`);
  }

  music.destroyPlayer();

}
module.exports.data = {
  name: "leave",
  description: "Disconnects the bot from the voice channel",
  aliases: ["disconnect"],
  hide: false,
  run: run
};