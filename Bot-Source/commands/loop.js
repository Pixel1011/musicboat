const musicHelper = require("../utils/musicHelper");
async function run(client, msg) {
  const music = new musicHelper(client, msg.guild.id);
  let check = await music.check(msg); if(check == false) return;
  if(!await music.PermsOrAloneCheck(msg, true, true)) return; 
  let player = music.getPlayer();

  if(player.loop == undefined || player.loop == false) {
    player.loop = true;
    return msg.channel.send("🔂 **Enabled!**");
  } else {
    player.loop = false;
    return msg.channel.send("🔂 **Disabled!**");
  }




}
module.exports.data = {
  name: "loop",
  description: "Loops the current song",
  aliases: [],
  hide: false,
  run: run
};