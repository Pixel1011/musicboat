import type { Message } from "discord.js";
import type { musicBot } from "../client";
import { UnifiedData } from "../utils/SlashUnifier";

export default async (msg: Message, client: musicBot) => {
  let prefix = client.prefix;
  if (!msg.content.startsWith(prefix)) return;
  const args = msg.content.split(" ");
  const command = args.shift().slice(prefix.length).toLowerCase();

  if (!client.commands[command]) return;
  let cmd = client.commands[command];

  let data = new UnifiedData(client, msg, null);

  try {
    await cmd.data.run(client, data, args);
  } catch (e) {
    client.logger.log(e.stack);
  }
};