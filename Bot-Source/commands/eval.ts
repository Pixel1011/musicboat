/* eslint-disable no-unused-vars */
import Discord, { SlashCommandBuilder, SlashCommandRoleOption } from "discord.js";
import { musicHelper } from "../utils/musicHelper";
import type { musicBot } from "../client";
import type { UnifiedData } from "../utils/SlashUnifier";
import { ArgOption, ArgType } from "../Structures/Command";

async function run(client: musicBot, data: UnifiedData, args: string[]) {
  if (data.author.id !== client.config.ownerid) {
    return;
  }

  // random variables to make evals quicker
  const music = new musicHelper(client, data.guild.id);
  let player = music.getPlayer();
  //

  var codeGiven = args.join(" ");
  if (codeGiven == "") return;

  try {
    var res = await eval(`(async function(){${codeGiven}}).call()`);
    res = require("util").inspect(res);
  } catch (e) {
    res = e.message;
  }
  let r = `**Input:** ${codeGiven}
  **Output:**\n ${res.replace(client.token, "Token")}`;
  let message = "input:\n\n" + codeGiven + "\n\noutput:\n\n" + res.replace(client.token, "Token");

  if (res.length > 1500) {
    r = await client.logger.logToHaste(message);
  }

  const embed = new Discord.EmbedBuilder();
  embed.setColor(0xa0d4ff);
  embed.setDescription(r);
  data.send({embeds: [embed]});
}

export const data = {
  name: "eval",
  description: "evaluates code",
  aliases: [],
  hide: true,
  arguments: [
    new ArgOption("code", "Code to evaluate", true, ArgType.STRING)
  ],
  run: run
};