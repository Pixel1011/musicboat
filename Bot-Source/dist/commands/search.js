"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("../Structures/Command");
const musicHelper_1 = require("../utils/musicHelper");
class SearchCmd extends Command_1.Command {
    constructor() {
        super();
        this.name = "search";
        this.description = "Searches from Youtube for a song via your query and returns the top 10 results.";
        this.aliases = ["find"];
        this.hide = false;
        this.arguments = [
            new Command_1.ArgOption("term", "Term to search from youtube", true, Command_1.ArgType.INTEGER)
        ];
    }
    async run(client, data, args) {
        const music = new musicHelper_1.musicHelper(client, data.guild.id);
        data.send(`**Searching** :mag_right: \`\`${args.join(" ")}\`\``);
        let results = await music.search(args.join(" "), "ytsearch:");
    }
}
exports.default = SearchCmd;
//# sourceMappingURL=search.js.map