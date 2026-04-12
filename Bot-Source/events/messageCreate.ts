import type { Message } from "discord.js";
import type { musicBot } from "../client";
import { UnifiedData } from "../utils/SlashUnifier";
import { Command } from "../Structures/Command";

export default async (msg: Message, client: musicBot) => {
  if (msg.author.id == client.user.id) return;
  
  let prefix = client.prefix;
  if (!msg.content.startsWith(prefix)) return;
  const args = msg.content.split(" ");
  const command = args.shift()!.slice(prefix.length).toLowerCase();

  if (!client.commands[command]) return;
  let cmd: Command = client.commands[command];

  let data = new UnifiedData(client, msg);

  try {
    await cmd.run(client, data, args);
  } catch (e: any) {
    client.logger.log(e.stack);
  }
};