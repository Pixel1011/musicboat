import Discord, { Message } from "discord.js";
import {logger} from "./utils/logger.js";
import fs from "fs";
import path from "path";
const Flags = Discord.Intents.FLAGS;
import { Node } from "lavaclient";
import { load } from "@lavaclient/spotify";
import Config from "./config.json";

import lavaConnect from "./events/lavaConnect.js";
import lavaError from "./events/lavaError.js";
import ready from "./events/ready.js";
import messageCreate from "./events/messageCreate.js";
import voiceStateUpdate from "./events/voiceStateUpdate.js";
import type { config } from "./Structures/Config.js";
import type { command } from "./Structures/Command.js";


export class musicBot extends Discord.Client {

  logger: logger;
  commands: command[];
  inactiveStrikes: any[];
  config: config;
  prefix: string;
  spotify: boolean;
  botnum: number;
  lavalink: Node;

  constructor(token : string, prefix : string, num : number) {
    super({
      intents: [Flags.DIRECT_MESSAGES, Flags.DIRECT_MESSAGE_REACTIONS, Flags.GUILDS, Flags.GUILD_EMOJIS_AND_STICKERS, Flags.GUILD_INTEGRATIONS, Flags.GUILD_INVITES, Flags.GUILD_MEMBERS, Flags.GUILD_MESSAGES, Flags.GUILD_MESSAGE_REACTIONS, Flags.GUILD_PRESENCES, Flags.GUILD_VOICE_STATES] // thats probably fine.. jesus
    });
    
    this.botnum = num + 1;
    this.logger = new logger(this);
    this.commands = [];
    this.inactiveStrikes = []; // reminder to change to per player instead of on client
    this.config = Config;
    this.token = token;
    this.prefix = prefix;
    this.spotify = false;
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
        let cmd: command = require(`./commands/${file}`);
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
    // todo - load up slash commands


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
    this.ws.on("VOICE_SERVER_UPDATE", data => this.lavalink.handleVoiceUpdate(data));
    this.ws.on("VOICE_STATE_UPDATE", data => this.lavalink.handleVoiceUpdate(data));
    this.lavalink.on("connect", () => lavaConnect(this));
    this.lavalink.on("error", (e) => lavaError(e, this));
    this.on("ready", () => ready(this));
    this.on("messageCreate", (msg) => messageCreate(msg, this));
    this.on("voiceStateUpdate", (oldState, newState) => voiceStateUpdate(oldState, newState, this));
    //
    this.lavalink.connect(this.user.id);

  }

}