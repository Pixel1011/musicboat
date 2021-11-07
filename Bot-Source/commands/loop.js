const musicHelper = require("../utils/musicHelper");
async function run(client, msg) {
  const music = new musicHelper(client, msg.guild.id);
  if (!await music.check(msg, true)) return;
  //if (!await music.PermsOrAloneCheck(msg, true, true)) return;
  let player = music.getPlayer();

  if (player.loop == undefined || player.loop == false) {
    player.loop = true;
    return msg.channel.send("🔂 **Enabled!**");
  } else {
    player.loop = false;
    return msg.channel.send("🔂 **Disabled!**");
  }




}
module.exports.data = {
  name: "loop",
  description: "Toggles looping for the current playing song.",
  aliases: ["repeat"],
  hide: false,
  run: run
};