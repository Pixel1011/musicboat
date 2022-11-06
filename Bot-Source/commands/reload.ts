import type { musicBot } from "../client";
import { ArgOption, ArgType } from "../Structures/Command";
import type { UnifiedData } from "../utils/SlashUnifier";
// this command a bit idk
async function run(client: musicBot, data: UnifiedData, args: string[]) {
  if (data.author.id !== client.config.ownerid) return;
  let command = args.join(" ").toLowerCase();
  if(!client.commands[command]) return;

  delete require.cache[require.resolve("./" + command)];
  try {
    let cmdFile = require("./" + command);
    client.commands[command] = cmdFile;
    if (cmdFile.aliases[0]) {
      cmdFile.aliases.forEach(alias => {
        client.commands[alias] = cmdFile;  
      });
    }
  } catch (e) {
    data.send(`Failed to load ${command}\n ${e.stack}`);
  }
  data.send(`Reloaded \`\`${command}\`\``);
}
export const data = {
  name: "reload",
  description: "Reloads a bot command",
  aliases: [],
  hide: true,
  arguments: [
    new ArgOption("command", "Command to reload", false, ArgType.STRING) // wont be needed but anyways
  ],
  run: run
};