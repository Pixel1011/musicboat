"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("../Structures/Command");
class PingCmd extends Command_1.Command {
    constructor() {
        super();
        this.name = "ping";
        this.description = "pong";
        this.aliases = [];
        this.hide = false;
        this.arguments = [];
    }
    async run(client, data) {
        data.send("Pong!").then(msg2 => {
            msg2.edit(`Pong! \`${msg2.createdTimestamp - data.createdTimestamp}ms\``);
        });
        client.logger.log("ping test");
    }
}
exports.default = PingCmd;
//# sourceMappingURL=ping.js.map