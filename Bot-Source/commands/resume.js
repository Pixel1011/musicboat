const musicHelper = require("../utils/musicHelper");

async function run(client, msg, args) {
  const music = new musicHelper(client, msg.guild.id);
  let check = await music.check(msg); if(check == false) return;
  let player = music.getPlayer();

  if(player.paused) {
    await player.resume();
    msg.channel.send("⏯ **Resuming** 👍");
  } else {
    return msg.channel.send(":x: **The player is not paused**");
  }


}
module.exports.data = {
  name: "resume",
  description: "Resumes the current song if it is paused",
  aliases: [],
  hide: false,
  run: run
};