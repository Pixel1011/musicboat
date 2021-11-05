const musicHelper = require("../utils/musicHelper");
async function run(client, msg, args) {
  const music = new musicHelper(client, msg.guild.id);
  if (!await music.check(msg)) return;
  let player = music.getPlayer();
  let vchannel = msg.member.voice.channel;
  // main stuff
  let skipsRequired = Math.floor((vchannel.members.size - 1) / 2);

  // check if already sent skip
  if (player.skips.includes(msg.author.id)) {
    if (music.PermsOrAloneCheck(msg)) {
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
    if (music.PermsOrAloneCheck(msg)) {
      return msg.channel.send(`**Skipping?** (${player.skips.length}/${skipsRequired} people) \`\`${client.prefix}forceskip\`\` **or** \`\`${client.prefix}fs\`\` **to force**`);
    } else {
      return msg.channel.send(`**Skipping?** (${player.skips.length}/${skipsRequired} people)`);
    }
  }

}
module.exports.data = {
  name: "skip",
  description: "Votes to skip the current playing song.",
  aliases: ["voteskip", "next", "s"],
  hide: false,
  run: run
};