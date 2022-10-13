import type { Message } from "discord.js";
import type { musicBot } from "../client";
import { musicHelper } from "../utils/musicHelper";

async function run(client: musicBot, msg: Message, args: string[]) {
  const music = new musicHelper(client, msg.guild.id);
  msg.channel.send(`**Searching** :mag_right: \`\`${args.join(" ")}\`\``);
  let results = await music.search(args.join(" "), "ytsearch:");
  let result = results.tracks[0];

  msg.channel.send(`Search result: \`\`${result.info.title}\`\`: ${result.info.uri}`);
}
export const data = {
  name: "search",
  description: "Searches from Youtube for a song via your query and returns the top 10 results.",
  aliases: ["find"],
  hide: false,
  run: run
};

// fix up this command to what its meant to do