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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.musicBot = void 0;
const discord_js_1 = __importStar(require("discord.js"));
const logger_js_1 = require("./utils/logger.js");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const Flags = discord_js_1.default.GatewayIntentBits;
const lavaclient_1 = require("lavaclient");
const spotify_1 = require("@lavaclient/spotify");
const config_json_1 = __importDefault(require("./config.json"));
const ready_js_1 = __importDefault(require("./events/ready.js"));
const messageCreate_js_1 = __importDefault(require("./events/messageCreate.js"));
const voiceStateUpdate_js_1 = __importDefault(require("./events/voiceStateUpdate.js"));
const Command_js_1 = require("./Structures/Command.js");
const interactionCreate_js_1 = __importDefault(require("./events/interactionCreate.js"));
const lavaEvents_js_1 = __importDefault(require("./events/lavaEvents.js"));
class musicBot extends discord_js_1.Client {
    constructor(token, prefix, num, updater) {
        super({
            intents: [Flags.DirectMessages, Flags.DirectMessageReactions, Flags.Guilds, Flags.GuildEmojisAndStickers, Flags.GuildIntegrations, Flags.GuildInvites, Flags.GuildMembers, Flags.GuildMessages, Flags.GuildMessageReactions, Flags.GuildPresences, Flags.GuildVoiceStates, Flags.MessageContent]
        });
        this.client = this;
        this.botnum = num + 1;
        this.logger = new logger_js_1.logger(this);
        this.commands = [];
        this.config = config_json_1.default;
        this.token = token;
        this.prefix = prefix;
        this.spotify = false;
        this.updater = updater;
        this.init();
    }
    async ReloadCommands(msg) {
        this.commands = [];
        let aliasnum = 0;
        const files = fs_1.default.readdirSync(path_1.default.resolve("./", "commands"));
        files.forEach(file => {
            try {
                file = file.replace("ts", "js");
                let cmd = require(`./commands/${file}`);
                this.commands[cmd.data.name] = cmd;
                if (cmd.data.aliases != null && cmd.data.aliases.length != 0) {
                    cmd.data.aliases.forEach(alias => {
                        this.commands[alias] = cmd;
                        this.commands[alias].data.alias = true;
                        aliasnum++;
                    });
                }
            }
            catch (e) {
                throw `Failed to load ${file}\n${e.stack}`;
            }
        });
        this.logger.log(`${Object.keys(this.commands).length - aliasnum} Commands loaded with ${aliasnum} aliases.`);
        if (msg)
            msg.channel.send(`**${Object.keys(this.commands).length - aliasnum}** Commands loaded with **${aliasnum}** aliases.`);
        let slashCommands = [];
        for (let file of files) {
            file = file.replace("ts", "js");
            let cmd = require(`./commands/${file}`);
            if (cmd.data.hide)
                continue;
            let slash = new discord_js_1.SlashCommandBuilder().setName(cmd.data.name).setDescription(cmd.data.description);
            if (cmd.data.arguments.length != 0) {
                cmd.data.arguments.forEach(async (arg) => {
                    function setOption(option) {
                        option.setName(arg.name).setDescription(arg.description).setRequired(arg.required);
                        return option;
                    }
                    if (arg.type == Command_js_1.ArgType.STRING)
                        slash.addStringOption(option => setOption(option));
                    if (arg.type == Command_js_1.ArgType.INTEGER)
                        slash.addIntegerOption(option => setOption(option));
                    if (arg.type == Command_js_1.ArgType.USER)
                        slash.addUserOption(option => setOption(option));
                    if (arg.type == Command_js_1.ArgType.CHANNEL)
                        slash.addChannelOption(option => setOption(option));
                    if (arg.type == Command_js_1.ArgType.ROLE)
                        slash.addRoleOption(option => setOption(option));
                    if (arg.type == Command_js_1.ArgType.BOOLEAN)
                        slash.addBooleanOption(option => setOption(option));
                });
            }
            slashCommands.push(slash);
        }
        const rest = new discord_js_1.REST({ version: "10" }).setToken(this.token);
        (async () => {
            try {
                this.logger.log("Started refreshing application (/) commands.");
                await rest.put(discord_js_1.Routes.applicationCommands(this.user.id), { body: slashCommands });
                this.logger.log("Successfully reloaded application (/) commands.");
            }
            catch (error) {
                console.error(error);
            }
        })();
    }
    async init() {
        if (this.config.spotifyID && this.config.spotifySecret)
            this.spotify = true;
        if (this.spotify) {
            (0, spotify_1.load)({
                client: {
                    id: this.config.spotifyID,
                    secret: this.config.spotifySecret,
                },
                autoResolveYoutubeTracks: false,
            });
        }
        await this.login(this.token);
        this.logger.log("Initializing..");
        await this.ReloadCommands();
        const info = {
            host: "127.0.0.1",
            port: 2333,
            auth: "youshallnotpass"
        };
        this.lavalink = new lavaclient_1.Node({ info,
            ws: {
                clientName: "musicboat",
                resuming: false,
                reconnecting: false
            },
            discord: {
                sendGatewayCommand: (guildId, data) => {
                    this.guilds.cache.get(guildId).shard.send(data);
                }
            }
        });
        this.ws.on(discord_js_1.GatewayDispatchEvents.VoiceStateUpdate, (u) => this.lavalink.players.handleVoiceUpdate(u));
        this.ws.on(discord_js_1.GatewayDispatchEvents.VoiceServerUpdate, (u) => this.lavalink.players.handleVoiceUpdate(u));
        let LavaeventClass = new lavaEvents_js_1.default(this);
        this.lavalink.on("connected", () => LavaeventClass.handleConnect());
        this.lavalink.on("disconnected", () => LavaeventClass.handleDisconnect());
        this.lavalink.on("error", async (e) => await LavaeventClass.handleError(e));
        this.on("ready", () => (0, ready_js_1.default)(this));
        this.on("messageCreate", (msg) => (0, messageCreate_js_1.default)(msg, this));
        this.on("interactionCreate", (inter) => (0, interactionCreate_js_1.default)(inter, this));
        this.on("voiceStateUpdate", (oldState, newState) => (0, voiceStateUpdate_js_1.default)(oldState, newState, this));
        this.logger.log("connecting to lavalink..");
        this.lavalink.connect({ userId: this.user.id });
    }
}
exports.musicBot = musicBot;
//# sourceMappingURL=client.js.map