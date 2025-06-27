"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SlashUnifier_1 = require("../utils/SlashUnifier");
exports.default = async (msg, client) => {
    let prefix = client.prefix;
    if (!msg.content.startsWith(prefix))
        return;
    const args = msg.content.split(" ");
    const command = args.shift().slice(prefix.length).toLowerCase();
    if (!client.commands[command])
        return;
    let cmd = client.commands[command];
    let data = new SlashUnifier_1.UnifiedData(client, msg, null);
    try {
        await cmd.run(client, data, args);
    }
    catch (e) {
        client.logger.log(e.stack);
    }
};
//# sourceMappingURL=messageCreate.js.map