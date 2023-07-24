import Discord, { Client, Message, REST, Routes, SlashCommandBuilder } from "discord.js";
import {logger} from "./utils/logger.js";
import fs from "fs";
import path from "path";
const Flags = Discord.GatewayIntentBits;
import { Node } from "lavaclient";
import { load } from "@lavaclient/spotify";
import Config from "./config.json";

import lavaConnect from "./events/lavaConnect.js";
import lavaError from "./events/lavaError.js";
import ready from "./events/ready.js";
import messageCreate from "./events/messageCreate.js";
import voiceStateUpdate from "./events/voiceStateUpdate.js";
import type { config } from "./Structures/Config.js";
import { ArgType, type Command } from "./Structures/Command.js";
import interactionCreate from "./events/interactionCreate.js";
import { LavalinkUpdater } from "./updateLavaLink.js";


export class musicBot extends Client {

  logger: logger;
  commands: Command[];
  config: config;
  prefix: string;
  spotify: boolean;
  botnum: number;
  lavalink: Node;
  updater: LavalinkUpdater;

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
    if(msg) msg.channel.send(`**${Object.keys(this.commands).length - aliasnum}** Commands loaded with **${aliasnum}** aliases.`);
    // load up slash commands
    let slashCommands: Discord.SlashCommandBuilder[] = [];
    // register slash commands but not aliances

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
        console.log("Started refreshing application (/) commands.");
    
        await rest.put(Routes.applicationCommands(this.user.id), { body: slashCommands });
    
        console.log("Successfully reloaded application (/) commands.");
      } catch (error) {
        console.error(error);
      }
    })();

  }
  // init
  // login, load commands, event handling etc
  async init() {
    if (this.config.spotifyID && this.config.spotifySecret) this.spotify = true;
    if (this.spotify) {
      load({
        client: {
          id: this.config.spotifyID,
          secret: this.config.spotifySecret,
        },
        autoResolveYoutubeTracks: false,
        //loaders: [ "track", "album", "playlist" ]
      });
    }

    await this.login(this.token);
    this.logger.log("Initializing..");

    // load commands
    await this.ReloadCommands();
    // lavalink stuff
    const info = {
      host: "127.0.0.1",
      port: 2333,
      password: "youshallnotpass"
    };

    this.lavalink = new Node({
      connection: info,
      sendGatewayPayload: (id, payload) => this.guilds.cache.get(id).shard.send(payload)
    });
    

    // load events
    this.on("raw", async (packet) => {
      if (packet.t === "VOICE_SERVER_UPDATE" || packet.t === "VOICE_STATE_UPDATE") {
        this.lavalink.handleVoiceUpdate(packet.d);
      }

    });
    this.updater.on("close", () => {
      this.logger.log("Lavalink closed, reconnecting...");
      this.lavalink.connect(this.user.id);
    });
    let lavaErrorClass = new lavaError(this);
    this.lavalink.on("connect", () => lavaConnect(this));
    this.lavalink.on("error", async (e) => await lavaErrorClass.handle(e));
    this.on("ready", () => ready(this));
    this.on("messageCreate", (msg) => messageCreate(msg, this));
    this.on("interactionCreate", (inter) => interactionCreate(inter, this));
    this.on("voiceStateUpdate", (oldState, newState) => voiceStateUpdate(oldState, newState, this));
    //
    this.lavalink.connect(this.user.id);

  }

}