import type { musicBot } from "../client";
import type { UnifiedData } from "../utils/SlashUnifier";

async function run(client: musicBot, data: UnifiedData) {
  data.send("Pong!").then(msg2 => {
    msg2.edit(`Pong! \`${msg2.createdTimestamp - data.createdTimestamp}ms\``);
  });
  client.logger.log("ping test");
}

export const data = {
  name: "ping",
  description: "pong",
  aliases: [],
  hide: false, // hide from help command
  arguments: [],
  run: run
};