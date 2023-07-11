"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = void 0;
async function run(client, data) {
    data.send("Pong!").then(msg2 => {
        msg2.edit(`Pong! \`${msg2.createdTimestamp - data.createdTimestamp}ms\``);
    });
    client.logger.log("ping test");
}
exports.data = {
    name: "ping",
    description: "pong",
    aliases: [],
    hide: false,
    arguments: [],
    run: run
};
//# sourceMappingURL=ping.js.map