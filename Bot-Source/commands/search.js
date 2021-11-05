async function run(client, msg, args) {
  const musicHelper = require("../utils/musicHelper");
  const music = new musicHelper(client, msg.guild.id);
  msg.channel.send(`**Searching** :mag_right: \`\`${args.join(" ")}\`\``);
  let results = await music.search(args.join(" "), "ytsearch:");
  let result = results.tracks[0];

  msg.channel.send(`Search result: \`\`${result.info.title}\`\`: ${result.info.uri}`);
}
module.exports.data = {
  name: "search",
  description: "Searches from Youtube for a song via your query and returns the top 10 results.",
  aliases: ["find"],
  hide: false,
  run: run
};

// fix up this command to what its meant to do