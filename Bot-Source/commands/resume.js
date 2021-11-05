const musicHelper = require("../utils/musicHelper");

async function run(client, msg, args) {
  const music = new musicHelper(client, msg.guild.id);
  if (!await music.check(msg)) return;
  let player = music.getPlayer();

  if (player.paused) {
    await player.resume();
    msg.channel.send("⏯ **Resuming** 👍");
  } else {
    return msg.channel.send(":x: **The player is not paused**");
  }


}
module.exports.data = {
  name: "resume",
  description: "Resumes paused music.",
  aliases: ["re", "res", "continue"],
  hide: false,
  run: run
};