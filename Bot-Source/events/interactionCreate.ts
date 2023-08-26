import type { BaseInteraction, ChatInputCommandInteraction, CommandInteraction } from "discord.js";
import type { musicBot } from "../client";
import { UnifiedData } from "../utils/SlashUnifier";

export default async (interaction: BaseInteraction, client: musicBot) => {
  if(interaction.isChatInputCommand() || interaction.isCommand()) {
    let Cmdinteraction = interaction as ChatInputCommandInteraction | CommandInteraction;
    let command = Cmdinteraction.commandName;

    let data = new UnifiedData(client, null, Cmdinteraction as ChatInputCommandInteraction);

    //console.log(await client.logger.logToHaste(data));
    //console.log(await client.logger.logToHaste(Cmdinteraction));

    let cmd = client.commands[command];
    try {
      await Cmdinteraction.deferReply();
      await cmd.data.run(client, data, data.args);
    } catch (e) {
      client.logger.log(e.stack);
    }
  }
};