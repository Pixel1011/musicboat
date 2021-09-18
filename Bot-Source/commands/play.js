const musicHelper = require("../utils/musicHelper");
async function run(client, msg, args) {
  let music = new musicHelper(client);
  let vchannel = msg.member.voice.channel;
  // Join
  let player = await music.join(msg.guild.id, vchannel.id);
  msg.channel.send(`:thumbsup: Joined \`\`${vchannel.name}\`\` and bound to <#${msg.channel.id}>`);
  
  // search
  msg.channel.send(`:musical_note: **Searching** :mag_right: \`\`${args.join(" ")}\`\``);
  let results = await music.search(args.join(" "), "ytsearch:");
  let result = results.tracks[0];
  // play
  player.play(result);

}
module.exports.data = {
  name: "play",
  description: "plays a song",
  aliases: ["p"],
  hide: false, // hide from help command
  run: run
};