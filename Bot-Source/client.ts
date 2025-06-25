import Discord, { Client, GatewayDispatchEvents, Message, REST, Routes, SlashCommandBuilder, TextChannel } from "discord.js";
import {logger} from "./utils/logger.js";
import fs from "fs";
import path from "path";
const Flags = Discord.GatewayIntentBits;
import { Node, NodeOptions } from "lavaclient";
import Config from "./config.json";
import ready from "./events/ready.js";
import messageCreate from "./events/messageCreate.js";
import voiceStateUpdate from "./events/voiceStateUpdate.js";
import type { config } from "./Structures/Config.js";
import { ArgType, type Command } from "./Structures/Command.js";
import interactionCreate from "./events/interactionCreate.js";
import { LavalinkUpdater } from "./updateLavaLink.js";
import lavaEvents from "./events/lavaEvents.js";

export class musicBot extends Client {

  logger: logger;
  commands: Command[];
  config: config;
  prefix: string;
  spotify: boolean;
  botnum: number;
  lavalink: Node;
  updater: LavalinkUpdater;
  client: musicBot = this;

  constructor(token : string, prefix : string, num : number, updater: LavalinkUpdater) {
    super({
      intents: [Flags.DirectMessages, Flags.DirectMessageReactions, Flags.Guilds, Flags.GuildEmojisAndStickers, Flags.GuildIntegrations, Flags.GuildInvites, Flags.GuildMembers, Flags.GuildMessages, Flags.GuildMessageReactions, Flags.GuildPresences, Flags.GuildVoiceStates, Flags.MessageContent] // thats probably fine.. jesus
    });
    
    this.botnum = num + 1;
    this.logger = new logger(this);
    this.commands = [];
    this.config = Config;
    this.token = token;
    this.prefix = prefix;
    this.spotify = false;
    this.updater = updater;
    this.init();
  }

  async ReloadCommands(msg?: Message) {
    this.commands = [];
    let aliasnum = 0;
    // load normal commands and aliases
    const files = fs.readdirSync(path.resolve("./", "commands"));
    files.forEach(file => {
      try {
        file = file.replace("ts", "js"); // someone please tell me why i have to do this
        let cmd: Command = require(`./commands/${file}`);
        this.commands[cmd.data.name] = cmd;
        // register aliases the command may have
        if (cmd.data.aliases != null && cmd.data.aliases.length != 0) {
          cmd.data.aliases.forEach(alias => {
            this.commands[alias] = cmd;
            this.commands[alias].data.alias = true;
            aliasnum++;
          });
        }
      } catch (e) {
        throw `Failed to load ${file}\n${e.stack}`;
      }
    });

    this.logger.log(`${Object.keys(this.commands).length - aliasnum} Commands loaded with ${aliasnum} aliases.`);
    if(msg) (msg.channel as TextChannel).send(`**${Object.keys(this.commands).length - aliasnum}** Commands loaded with **${aliasnum}** aliases.`);
    // load up slash commands
    let slashCommands: Discord.SlashCommandBuilder[] = [];
    // register slash commands but not aliases

    for (let file of files) {
      file = file.replace("ts", "js");
      let cmd: Command = require(`./commands/${file}`);

      if (cmd.data.hide) continue;

      let slash = new SlashCommandBuilder().setName(cmd.data.name).setDescription(cmd.data.description);
      
      if (cmd.data.arguments.length != 0) {
        // add all different types of arguments
        cmd.data.arguments.forEach(async arg => {
          function setOption(option: any) {
            option.setName(arg.name).setDescription(arg.description).setRequired(arg.required);
            return option;
          }
          if (arg.type == ArgType.STRING) slash.addStringOption(option => setOption(option));
          if (arg.type == ArgType.INTEGER) slash.addIntegerOption(option => setOption(option));
          if (arg.type == ArgType.USER) slash.addUserOption(option => setOption(option));
          if (arg.type == ArgType.CHANNEL) slash.addChannelOption(option => setOption(option));
          if (arg.type == ArgType.ROLE) slash.addRoleOption(option => setOption(option));
          if (arg.type == ArgType.BOOLEAN) slash.addBooleanOption(option => setOption(option));
        });

      }
      // in future slash command permissions?

      slashCommands.push(slash);
    }

    const rest = new REST({ version: "10" }).setToken(this.token);
    (async () => {
      try {
        this.logger.log("Started refreshing application (/) commands.");
    
        await rest.put(Routes.applicationCommands(this.user.id), { body: slashCommands });
        
        this.logger.log("Successfully reloaded application (/) commands.");
      } catch (error) {
        console.error(error);
      }
    })();

  }
  // init
  // login, load commands, event handling etc
  async init() {
    await this.login(this.token);
    this.logger.log("Initializing..");

    // load commands
    await this.ReloadCommands();
    // lavalink stuff

    const info: NodeOptions["info"] = {
      host: "127.0.0.1",
      port: 2333,
      auth: "youshallnotpass"
    };

    this.lavalink = new Node({info,
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
    

    // load events
    this.ws.on(GatewayDispatchEvents.VoiceStateUpdate, (u) => this.lavalink.players.handleVoiceUpdate(u));
    this.ws.on(GatewayDispatchEvents.VoiceServerUpdate, (u) => this.lavalink.players.handleVoiceUpdate(u));

    let LavaeventClass =  new lavaEvents(this);
    this.lavalink.on("connected", () => LavaeventClass.handleConnect());
    this.lavalink.on("disconnected", () => LavaeventClass.handleDisconnect());
    this.lavalink.on("error", async (e) => await LavaeventClass.handleError(e));
    this.on("ready", () => ready(this));
    this.on("messageCreate", (msg) => messageCreate(msg, this));
    this.on("interactionCreate", (inter) => interactionCreate(inter, this));
    this.on("voiceStateUpdate", (oldState, newState) => voiceStateUpdate(oldState, newState, this));
    //
    this.logger.log("connecting to lavalink..");
    this.lavalink.connect({ userId: this.user.id });

  }

}