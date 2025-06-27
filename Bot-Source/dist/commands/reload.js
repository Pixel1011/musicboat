"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("../Structures/Command");
class ReloadCmd extends Command_1.Command {
    constructor() {
        super();
        this.name = "reload";
        this.description = "Reloads a bot command";
        this.aliases = [];
        this.hide = true;
        this.arguments = [
            new Command_1.ArgOption("command", "Command to reload", false, Command_1.ArgType.STRING)
        ];
    }
    async run(client, data, args) {
        if (data.author.id !== client.config.ownerid)
            return;
        let command = args.join(" ").toLowerCase();
        if (!client.commands[command])
            return;
        delete require.cache[require.resolve("./" + command)];
        try {
            let cmdFile = require("./" + command);
            client.commands[command] = cmdFile;
            if (cmdFile.aliases && cmdFile.aliases[0]) {
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
}
exports.default = ReloadCmd;
//# sourceMappingURL=reload.js.map