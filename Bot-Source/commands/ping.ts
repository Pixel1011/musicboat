import type { Message } from "discord.js";
import type { musicBot } from "../client";

async function run(client: musicBot, msg: Message) {
  msg.channel.send("Pong!").then(msg2 => {
    msg2.edit(`Pong! \`${msg2.createdTimestamp - msg.createdTimestamp}ms\``);
  });
  client.logger.log("ping test");
}

export const data = {
  name: "ping",
  description: "pong",
  aliases: [],
  hide: false, // hide from help command
  run: run
};