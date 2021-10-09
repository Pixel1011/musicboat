const { Permissions } = require("discord.js");
const musicHelper = require("../utils/musicHelper");

async function run(client, msg, args) {
  const music = new musicHelper(client, msg.guild.id);
  let check = await music.check(msg); if(check == false) return;
  
  let member = msg.guild.members.cache.get(msg.author.id);
  if(member.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS) || member.roles.cache.find(role => role.name == "DJ")) {
    await music.skip();
    msg.channel.send(":fast_forward: **Skipped** :thumbsup:");
  } else {
    return msg.channel.send(":x: **This command requires you to either have a role named ``DJ`` or the ``Manage Channels`` permission to use it**");
  }
}
module.exports.data = {
  name: "forceskip",
  description: "Forces the current song to skip without voting",
  aliases: ["fs"],
  hide: false, // hide from help command
  run: run
};