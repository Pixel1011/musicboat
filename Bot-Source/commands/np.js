const musicHelper = require("../utils/musicHelper");
async function run(client, msg) {
  const music = new musicHelper(client, msg.guild.id);
  if (!await music.check(msg, false, false, true, true)) return;
  let player = music.getPlayer();



}
module.exports.data = {
  name: "np",
  description: "Shows the current playing song",
  aliases: ["nowplaying"],
  hide: false,
  run: run
};