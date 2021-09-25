const { Permissions } = require("discord.js");

async function run(client, msg, args) {
  const musicHelper = require("../utils/musicHelper");
  const music = new musicHelper(client);
  let vchannel = msg.member.voice.channel;
  let player = client.lavalink.players.get(msg.guild.id);
  // check if playing
  if (!player) {
    return msg.channel.send(":x: **Bot is not currently playing**");
  }
  if(!player.playing && !player.queue.currentSong) {
    return msg.channel.send(":x: **Bot is not currently playing**");
  }
  // check if user in same vc
  
  if (!vchannel) {
    return msg.channel.send(":x: **You have to be in a voice channel to use this command.**");
  }
  
  if ((vchannel.id != msg.guild.me.voice.channelId) && msg.guild.me.voice.channelId != null) {
    return msg.channel.send(":x: **You have to be in the same voice channel to use this command**");
  }

  
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
    music.skip(msg.guild.id);
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