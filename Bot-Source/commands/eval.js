// stolen from pixelator with few edits dont mind it
const Discord = require("discord.js");

async function run(client, msg, args) {
  if (msg.author.id !== client.config.ownerid) {
    return;
  }

  var codeGiven = args.join(" ");
  if(codeGiven == "") return;

  try{
    var res = await eval(`(async function(){${codeGiven}}).call()`);
    res = require("util").inspect(res);
  } catch (e) {
    res = e.stack;
  }
  let r = `**Input:** ${codeGiven}
  **Output:**\n ${res.replace(client.token, "Token")}`;
  let message = "input:\n\n" + codeGiven + "\n\noutput:\n\n" + res.replace(client.token, "Token");

  if(res.length > 1500) {
    r = await client.logger.logToHaste(message);
  }
  
  const embed = new Discord.MessageEmbed();
  embed.setColor(0xa0d4ff);
  embed.setDescription(r);
  msg.channel.send({embeds: [embed]});
}

module.exports.data = {
  name: "eval",
  description: "evaluates code",
  aliases: [],
  hide: true, 
  run: run
};