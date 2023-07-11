"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = void 0;
const Command_1 = require("../Structures/Command");
const musicHelper_1 = require("../utils/musicHelper");
async function run(client, data, args) {
    const music = new musicHelper_1.musicHelper(client, data.guild.id);
    data.send(`**Searching** :mag_right: \`\`${args.join(" ")}\`\``);
    let results = await music.search(args.join(" "), "ytsearch:");
    let result = results.tracks[0];
    data.channel.send(`Search result: \`\`${result.info.title}\`\`: ${result.info.uri}`);
}
exports.data = {
    name: "search",
    description: "Searches from Youtube for a song via your query and returns the top 10 results.",
    aliases: ["find"],
    hide: false,
    arguments: [
        new Command_1.ArgOption("term", "Term to search from youtube", true, Command_1.ArgType.INTEGER)
    ],
    run: run
};
//# sourceMappingURL=search.js.map