
async function run(client, msg, args) {
  if (msg.author.id !== client.config.ownerid) return;
  let command = args.join(" ").toLowerCase();
  if(!client.commands[command]) return;

  delete require.cache[require.resolve("./" + command)];
  try {
    let cmdFile = require("./" + command);
    client.commands[command] = cmdFile;
    cmdFile.aliases.forEach(alias => {
      client.commands[alias] = cmdFile;  
    });
  } catch (e) {
    msg.channel.send(`Failed to load ${command}\n ${e.stack}`);
  }
  msg.channel.send(`Reloaded \`\`${command}\`\``);
}
module.exports.data = {
  name: "reload",
  description: "Reloads a bot command",
  aliases: [],
  hide: true,
  run: run
};