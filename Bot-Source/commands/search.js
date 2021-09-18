async function run(client, msg, args) {
  const musicHelper = require("../utils/musicHelper");
  const music = new musicHelper(client);
  msg.channel.send(`**Searching** :mag_right: \`\`${args.join(" ")}\`\``);
  let results = await music.search(args.join(" "), "ytsearch:");
  let result = results.tracks[0];
  //client.logger.log(JSON.stringify(results));
  msg.channel.send(`Search result: \`\`${result.info.title}\`\`: ${result.info.uri}`);    
}
module.exports.data = {
  name: "search",
  description: "Searches through youtube for a song",
  aliases: ["s"],
  hide: false, // hide from help command
  run: run
};