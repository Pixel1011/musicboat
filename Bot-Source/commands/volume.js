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
  let check = await music.check(msg); if(check == false) return;
  let player = music.getPlayer();

  if (args.join(" ") == "") {
    return msg.channel.send(`🎵 **The current volume is at ${player.volume}%**`); 
  }

  if (isNumeric(args.join(" "))) {
    await player.setVolume(args.join(" "));
    return msg.channel.send(`🎵 **Set volume to ${args.join(" ")}%** 👍`);
  } else {
    return msg.channel.send(":x: **This value is not a number!**");
  }



}
module.exports.data = {
  name: "volume",
  description: "Sets volume to any percentage",
  aliases: ["v"],
  hide: false,
  run: run
};