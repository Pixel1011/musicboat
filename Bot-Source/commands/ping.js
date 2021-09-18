async function run(client, msg) {
  msg.channel.send("Pong!").then(msg2 => {
    msg2.edit(`Pong! \`${msg2.createdTimestamp - msg.createdTimestamp}ms\``);
  });
}

module.exports.data = {
  name: "ping",
  description: "pong",
  aliases: [],
  hide: false, // hide from help command
  run: run
};