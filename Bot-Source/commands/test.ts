import type { musicBot } from "../client";
import type { UnifiedData } from "../utils/SlashUnifier";

async function run(client: musicBot, data: UnifiedData) {
  data.send("Pong!");
  data.send("uh oh");
  data.send("UH OHHHH");
}

export const data = {
  name: "test",
  description: "tests things",
  aliases: [],
  hide: true, // hide from help command
  arguments: [],
  run: run
};