"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SlashUnifier_1 = require("../utils/SlashUnifier");
exports.default = async (interaction, client) => {
    if (interaction.isChatInputCommand() || interaction.isCommand()) {
        let Cmdinteraction = interaction;
        let command = Cmdinteraction.commandName;
        let data = new SlashUnifier_1.UnifiedData(client, undefined, Cmdinteraction);
        if (data.author.id == "588029104838934528" && command != "np" && command != "q" && command != "queue" && command != "play" && command != "join" && command != "ping") {
            Cmdinteraction.reply("nuh uh");
            return;
        }
        let cmd = client.commands[command];
        try {
            await Cmdinteraction.deferReply();
            await cmd.run(client, data, data.args);
        }
        catch (e) {
            client.logger.log(e.stack);
        }
    }
};
//# sourceMappingURL=interactionCreate.js.map