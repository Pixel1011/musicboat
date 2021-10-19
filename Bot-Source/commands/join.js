const musicHelper = require("../utils/musicHelper");
async function run(client, msg) {
  const music = new musicHelper(client, msg.guild.id);
  if (!await music.check(msg, false, false, true, false)) return;
  let vchannel = msg.member.voice.channel;
  let player = music.getPlayer();

  // check if bot already in vc
  if (msg.guild.me.voice.channelId == vchannel.id && player) {
    return msg.channel.send(":x: **I am already connected to your channel**");
  }
  if (msg.guild.me.voice.channelId && player) {
    return msg.channel.send(":x: **You cannot summon the bot as it is playing elsewhere**");
  }

  if (!vchannel.joinable) {
    return msg.channel.send(":x: **Your channel is not joinable**");
  }
  if (!vchannel.speakable) {
    return msg.channel.send(":x: **The bot cannot speak in your channel**");
  }

  await music.join(vchannel.id);
  msg.channel.send(`:thumbsup: **Joined** \`\`${vchannel.name}\`\` **and bound to** <#${msg.channel.id}>`);


}
module.exports.data = {
  name: "join",
  description: "Connects the bot to your voice channel",
  aliases: ["connect"],
  hide: false,
  run: run
};