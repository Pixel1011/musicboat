"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = void 0;
const Command_1 = require("../Structures/Command");
async function run(client, data, args) {
    return data.send("Bot borked :p");
}
exports.data = {
    name: "play",
    description: "Plays a song with the given name or url.",
    aliases: ["p"],
    hide: false,
    arguments: [
        new Command_1.ArgOption("term", "Term to be searched from youtube or a youtube/spotify url to video/playlist", false, Command_1.ArgType.STRING)
    ],
    run: run
};
//# sourceMappingURL=play.js.map