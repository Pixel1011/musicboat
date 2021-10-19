const musicHelper = require("../utils/musicHelper");

// thanks stackoverflow
function isNumeric(str) {
  if (typeof str != "string") return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
}

// i have no idea what the rythm responses to music were so help appreciated
// also need to reset volume when queue finishes and timeout occurs otherwise questionable surprises occur lmao
async function run(client, msg, args) {
  const music = new musicHelper(client, msg.guild.id);
  if (!await music.check(msg, true, false, true, true)) return;
  let player = music.getPlayer();
  let vol = args.join(" ");

  if (vol == "") {
    return msg.channel.send(`🎵 **The current volume is at** \`\`${player.volume}%\`\``);
  }
  if (!isNumeric(vol)) return msg.channel.send(":x: **This value is not a number!**");

  if (vol > 2147483647) return msg.channel.send(":x: **The volume cannot be set this high!**");

  await player.setVolume(vol);
  return msg.channel.send(`🎵 **Set volume to ${vol}%** 👍`);




}
module.exports.data = {
  name: "volume",
  description: "Sets volume to any percentage",
  aliases: ["v"],
  hide: false,
  run: run
};