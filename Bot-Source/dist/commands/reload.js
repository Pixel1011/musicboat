"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = void 0;
const Command_1 = require("../Structures/Command");
async function run(client, data, args) {
    if (data.author.id !== client.config.ownerid)
        return;
    let command = args.join(" ").toLowerCase();
    if (!client.commands[command])
        return;
    delete require.cache[require.resolve("./" + command)];
    try {
        let cmdFile = require("./" + command);
        client.commands[command] = cmdFile;
        if (cmdFile.aliases[0]) {
            cmdFile.aliases.forEach(alias => {
                client.commands[alias] = cmdFile;
            });
        }
    }
    catch (e) {
        data.send(`Failed to load ${command}\n ${e.stack}`);
    }
    data.send(`Reloaded \`\`${command}\`\``);
}
exports.data = {
    name: "reload",
    description: "Reloads a bot command",
    aliases: [],
    hide: true,
    arguments: [
        new Command_1.ArgOption("command", "Command to reload", false, Command_1.ArgType.STRING)
    ],
    run: run
};
//# sourceMappingURL=reload.js.map