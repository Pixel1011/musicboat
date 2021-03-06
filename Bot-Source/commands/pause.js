const musicHelper = require("../utils/musicHelper");

async function run(client, msg, args) {
  const music = new musicHelper(client, msg.guild.id);
  if (!await music.check(msg)) return;
  let player = music.getPlayer();

  if (player.paused) {
    msg.channel.send(":x: **The player is already paused**");
  } else {
    await player.pause();
    msg.channel.send("**Paused** ⏸");
  }


}
module.exports.data = {
  name: "pause",
  description: "Pauses the current playing track.",
  aliases: ["stop"],
  hide: false,
  run: run
};