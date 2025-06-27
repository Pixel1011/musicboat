import type { musicBot } from "../client";
import { ArgOption, ArgType, Command } from "../Structures/Command";
import type { UnifiedData } from "../utils/SlashUnifier";
// this command a bit idk

export default class ReloadCmd extends Command {
  constructor() {
    super();
    this.name =  "reload";
    this.description =  "Reloads a bot command";
    this.aliases =  [];
    this.hide =  true;
    this.arguments =  [
      new ArgOption("command", "Command to reload", false, ArgType.STRING) // wont be needed but anyways
    ];
  }

  async run(client: musicBot, data: UnifiedData, args: string[]) {
    if (data.author.id !== client.config.ownerid) return;
    let command = args.join(" ").toLowerCase();
    if(!client.commands[command]) return;

    delete require.cache[require.resolve("./" + command)];
    try {
      let cmdFile = require("./" + command);
      client.commands[command] = cmdFile;
      if (cmdFile.aliases && cmdFile.aliases[0]) {
        cmdFile.aliases.forEach(alias => {
          client.commands[alias] = cmdFile;  
        });
      }
    } catch (e) {
      data.send(`Failed to load ${command}\n ${e.stack}`);
    }
    data.send(`Reloaded \`\`${command}\`\``);
  }
}