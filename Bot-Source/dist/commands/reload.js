"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("../Structures/Command");
const childproc = __importStar(require("child_process"));
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
        data.send("Running tsc..");
        let spawned = childproc.spawnSync("tsc -b --verbose", {
            stdio: "inherit",
            shell: true
        });
        if (spawned.error) {
            data.send("tsc failed!: " + spawned.error.message);
            return;
        }
        data.send("tsc succeeded!");
        delete require.cache[require.resolve("./" + command + ".js")];
        try {
            let cmdClass = require(`./${command}.js`).default;
            let cmd = new cmdClass();
            client.commands[command] = cmd;
            if (cmd.aliases && cmd.aliases[0]) {
                cmd.aliases.forEach(alias => {
                    client.commands[alias] = cmd;
                });
            }
        }
        catch (e) {
            data.send(`Failed to load ${command}\n ${e.stack}`);
            return;
        }
        data.send(`Reloaded \`\`${command}\`\``);
    }
}
exports.default = ReloadCmd;
//# sourceMappingURL=reload.js.map