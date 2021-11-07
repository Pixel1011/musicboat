const musicHelper = require("../utils/musicHelper");
async function run(client, msg) {
  const music = new musicHelper(client, msg.guild.id);
  if (!await music.check(msg, true)) return;
  let player = music.getPlayer();

  if (player.queueLoop == undefined || player.queueLoop == false) {
    player.queueLoop = true;
    return msg.channel.send("🔁 **Queue loop enabled**");
  } else {
    player.queueLoop = false;
    return msg.channel.send("🔁 **Queue loop disabled**");
  }




}
module.exports.data = {
  name: "loopqueue",
  description: "Toggles looping for the whole queue.",
  aliases: ["qloop", "lq", "queueloop"],
  hide: false,
  run: run
};