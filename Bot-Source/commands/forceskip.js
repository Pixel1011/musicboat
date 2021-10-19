const musicHelper = require("../utils/musicHelper");

async function run(client, msg, args) {
  const music = new musicHelper(client, msg.guild.id);
  if (!await music.check(msg)) return;
  if (!await music.PermsOrAloneCheck(msg, false, true)) return;

  await music.skip();
  msg.channel.send(":fast_forward: **Skipped** :thumbsup:");

}
module.exports.data = {
  name: "forceskip",
  description: "Forces the current song to skip without voting",
  aliases: ["fs"],
  hide: false, // hide from help command
  run: run
};