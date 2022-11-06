import type { musicBot } from "../client";
import { ArgOption, ArgType } from "../Structures/Command";
import { musicHelper } from "../utils/musicHelper";
import type { UnifiedData } from "../utils/SlashUnifier";

async function run(client: musicBot, data: UnifiedData, args: string[]) {
  const music = new musicHelper(client, data.guild.id);
  data.send(`**Searching** :mag_right: \`\`${args.join(" ")}\`\``);
  let results = await music.search(args.join(" "), "ytsearch:");
  let result = results.tracks[0];

  data.channel.send(`Search result: \`\`${result.info.title}\`\`: ${result.info.uri}`);
}
export const data = {
  name: "search",
  description: "Searches from Youtube for a song via your query and returns the top 10 results.",
  aliases: ["find"],
  hide: false,
  arguments: [
    new ArgOption("term", "Term to search from youtube", true, ArgType.INTEGER)
  ],
  run: run
};

// fix up this command to what its meant to do