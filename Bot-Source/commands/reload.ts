import type { Message } from "discord.js";
import type { musicBot } from "../client";

async function run(client: musicBot, msg: Message, args: string[]) {
  if (msg.author.id !== client.config.ownerid) return;
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
    msg.channel.send(`Failed to load ${command}\n ${e.stack}`);
  }
  msg.channel.send(`Reloaded \`\`${command}\`\``);
}
export const data = {
  name: "reload",
  description: "Reloads a bot command",
  aliases: [],
  hide: true,
  run: run
};