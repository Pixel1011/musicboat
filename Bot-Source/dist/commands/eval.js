"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = void 0;
const discord_js_1 = __importDefault(require("discord.js"));
const musicHelper_1 = require("../utils/musicHelper");
const Command_1 = require("../Structures/Command");
async function run(client, data, args) {
    if (data.author.id !== client.config.ownerid) {
        return;
    }
    const music = new musicHelper_1.musicHelper(client, data.guild.id);
    let player = music.getPlayer();
    var codeGiven = args.join(" ");
    if (codeGiven == "")
        return;
    try {
        var res = await eval(`(async function(){${codeGiven}}).call()`);
        res = require("util").inspect(res);
    }
    catch (e) {
        res = e.message;
    }
    let r = `**Input:** ${codeGiven}
  **Output:**\n ${res.replace(client.token, "Token")}`;
    let message = "input:\n\n" + codeGiven + "\n\noutput:\n\n" + res.replace(client.token, "Token");
    if (res.length > 1500) {
        r = await client.logger.logToHaste(message);
    }
    const embed = new discord_js_1.default.EmbedBuilder();
    embed.setColor(0xa0d4ff);
    embed.setDescription(r);
    data.send({ embeds: [embed] });
}
exports.data = {
    name: "eval",
    description: "evaluates code",
    aliases: [],
    hide: true,
    arguments: [
        new Command_1.ArgOption("code", "Code to evaluate", true, Command_1.ArgType.STRING)
    ],
    run: run
};
//# sourceMappingURL=eval.js.map