import type { musicBot } from "../client";
import { ArgOption, ArgType, Command } from "../Structures/Command";
import { musicHelper } from "../utils/musicHelper";
import type { UnifiedData } from "../utils/SlashUnifier";

export default class SearchCmd extends Command {
  constructor() {
    super();
    this.name =  "search";
    this.description =  "Searches from Youtube for a song via your query and returns the top 10 results.";
    this.aliases =  ["find"];
    this.hide =  false;
    this.arguments =  [
      new ArgOption("term", "Term to search from youtube", true, ArgType.INTEGER)
    ];
  }

  async run(client: musicBot, data: UnifiedData, args: string[]) {
    const music = new musicHelper(client, data.guild.id);
    data.send(`**Searching** :mag_right: \`\`${args.join(" ")}\`\``);
    let results = await music.search(args.join(" "), "ytsearch:");
    //let result = results.tracks[0];

  //data.send(`Search result: \`\`${result.info.title}\`\`: ${result.info.uri}`);
  }

}

// fix up this command to what its meant to do