
async function run(client, msg, args) {
  if (msg.author.id !== client.config.ownerid) return;

  await client.boat.ReloadCommands(msg);
}
module.exports.data = {
  name: "reload",
  description: "Reloads a bot command",
  aliases: [],
  hide: true,
  run: run
};