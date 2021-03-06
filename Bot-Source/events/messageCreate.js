module.exports = (msg) => {
  let client = msg.client;
  let prefix = msg.client.prefix;
  if (!msg.content.startsWith(prefix)) return;
  const args = msg.content.split(" ");
  const command = args.shift().slice(prefix.length).toLowerCase();

  if (!client.commands[command]) return;
  let cmd = client.commands[command];
  try {
    cmd.data.run(client, msg, args);
  } catch (e) {
    client.logger.log(e);
  }
};