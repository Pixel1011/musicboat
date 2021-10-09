const { Permissions } = require("discord.js");
const musicHelper = require("../utils/musicHelper");
async function run(client, msg, args) {
  const music = new musicHelper(client, msg.guild.id);
  let check = await music.check(msg); if(check == false) return;
  let player = music.getPlayer();
  let vchannel = msg.member.voice.channel;

  
  // main stuff
  let member = msg.guild.members.cache.get(msg.author.id);
  let hasPerms = member.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS) || member.roles.cache.find(role => role.name == "DJ");
  let skipsRequired = Math.floor((vchannel.members.size - 1)/2);

  // check if already sent skip
  if (player.skips.includes(msg.author.id)) {
    if(hasPerms) {
      return msg.channel.send(`**Skipping?** (${player.skips.length}/${skipsRequired} people) \`\`${client.prefix}forceskip\`\` **or** \`\`${client.prefix}fs\`\` **to force**`);
    } else {
      return msg.channel.send(`**Skipping?** (${player.skips.length}/${skipsRequired} people)`);
    }
  }
    
  player.skips.push(msg.author.id);
  if (player.skips.length >= skipsRequired) {
    player.skips = [];
    music.skip();
    msg.channel.send("⏩ **Skipped** 👍");
  } else {
    if(hasPerms) {
      return msg.channel.send(`**Skipping?** (${player.skips.length}/${skipsRequired} people) \`\`${client.prefix}forceskip\`\` **or** \`\`${client.prefix}fs\`\` **to force**`);
    } else {
      return msg.channel.send(`**Skipping?** (${player.skips.length}/${skipsRequired} people)`);
    }
  }

}
module.exports.data = {
  name: "skip",
  description: "Skips current song",
  aliases: [],
  hide: false,
  run: run
};