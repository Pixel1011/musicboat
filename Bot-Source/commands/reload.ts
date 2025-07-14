import type { musicBot } from "../client";
import { ArgOption, ArgType, Command } from "../Structures/Command";
import type { UnifiedData } from "../utils/SlashUnifier";
import * as childproc from "child_process";
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
    data.send("Running tsc..");
    let spawned = childproc.spawnSync("tsc -b --verbose", {
      stdio: "inherit",
      shell: true
    });
    if(spawned.error) {
      data.send("tsc failed!: " + spawned.error.message);
      return;
    }
    data.send("tsc succeeded!");
    delete require.cache[require.resolve("./" + command + ".js")];
    try {
      let cmdClass = require(`./${command}.js`).default;
      let cmd: Command  = new cmdClass();
      client.commands[command] = cmd;
      if (cmd.aliases && cmd.aliases[0]) {
        cmd.aliases.forEach(alias => {
          client.commands[alias] = cmd; 
        });
      }
    } catch (e) {
      data.send(`Failed to load ${command}\n ${e.stack}`);
      return;
    }
    data.send(`Reloaded \`\`${command}\`\``);
  }
}