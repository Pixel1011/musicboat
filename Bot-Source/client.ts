import Discord, { Client, GatewayDispatchEvents, Message, REST, Routes, SlashCommandAttachmentOption, SlashCommandBooleanOption, SlashCommandBuilder, SlashCommandChannelOption, SlashCommandIntegerOption, SlashCommandMentionableOption, SlashCommandNumberOption, SlashCommandRoleOption, SlashCommandStringOption, SlashCommandUserOption, TextChannel } from "discord.js";
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
import { PlayerData } from "./utils/PlayerData.js";
import { musicHelper } from "./utils/musicHelper.js";
import zlib from "zlib";

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
  playerBackups: Map<string, PlayerData> = new Map<string, PlayerData>();

  constructor(token : string, prefix : string, num : number, updater: LavalinkUpdater) {
    super({
      intents: [Flags.DirectMessages, Flags.DirectMessageReactions, Flags.Guilds, Flags.GuildExpressions, Flags.GuildIntegrations, Flags.GuildInvites, Flags.GuildMembers, Flags.GuildMessages, Flags.GuildMessageReactions, Flags.GuildPresences, Flags.GuildVoiceStates, Flags.MessageContent], // thats probably fine.. jesus
      rest: {
        rejectOnRateLimit: (r) => {this.logger.log(r.url + "  : " + r.timeToReset); return false;}
      }
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
    files.forEach(async file => {
      try {
        file = file.replace("ts", "js"); // someone please tell me why i have to do this

        let cmdClass = require(`./commands/${file}`).default;
        let cmd:Command  = new cmdClass();

        this.commands[cmd.name] = cmd;
        // register aliases the command may have
        if (cmd.aliases != null && cmd.aliases.length != 0) {
          cmd.aliases.forEach(alias => {
            this.commands[alias] = cmd;
            this.commands[alias].alias = true;
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
      let cmdClass = require(`./commands/${file}`).default;
      let cmd:Command  = new cmdClass();
      if (cmd.hide) continue;

      let slash = new SlashCommandBuilder().setName(cmd.name).setDescription(cmd.description);
      // add slash command contexts later because rn they can be ran in dms which isnt good
      if (cmd.arguments.length != 0) {

        type SlashCmdOptions = SlashCommandStringOption | 
        SlashCommandIntegerOption | 
        SlashCommandUserOption | 
        SlashCommandChannelOption | 
        SlashCommandRoleOption | 
        SlashCommandBooleanOption | 
        SlashCommandMentionableOption | 
        SlashCommandAttachmentOption | 
        SlashCommandNumberOption

        // add all different types of arguments
        cmd.arguments.forEach(async arg => {
          function setOption<T extends SlashCmdOptions>(option: T): T {
            option.setName(arg.name).setDescription(arg.description).setRequired(arg.required);
            if (!arg.extras) return option;
            if (option instanceof SlashCommandStringOption) {
              if ("autocomplete" in arg.extras && arg.extras.autocomplete) option.setAutocomplete(arg.extras.autocomplete);
              if ("minLength" in arg.extras) option.setMinLength(arg.extras.minLength);
              if ("maxLength" in arg.extras) option.setMaxLength(arg.extras.maxLength);
              if ("choices" in arg.extras) option.setChoices(arg.extras.choices.map(s => ({name: s, value: s})));
            } else
            if (option instanceof SlashCommandIntegerOption) {
              if ("autocomplete" in arg.extras && arg.extras.autocomplete) option.setAutocomplete(arg.extras.autocomplete);
              if ("minValue" in arg.extras) option.setMinValue(arg.extras.minValue);
              if ("maxValue" in arg.extras) option.setMaxValue(arg.extras.maxValue);
              if ("choices" in arg.extras) option.setChoices(arg.extras.choices.map(s => ({name: s, value: s})));
            } else
            if (option instanceof SlashCommandUserOption) {
              // no extras
            } else
            if (option instanceof SlashCommandChannelOption) {
              if ("channelTypes" in arg.extras) option.addChannelTypes(arg.extras.channelTypes);
            } else
            if (option instanceof SlashCommandRoleOption) {
              // no extras
            } else
            if (option instanceof SlashCommandBooleanOption) {
              // no extras
            } else
            if (option instanceof SlashCommandMentionableOption) {
              // no extras
            } else
            if (option instanceof SlashCommandAttachmentOption) {
              // no extras
            } else
            if (option instanceof SlashCommandNumberOption) {
              if ("autocomplete" in arg.extras && arg.extras.autocomplete) option.setAutocomplete(arg.extras.autocomplete);
              if ("minValue" in arg.extras) option.setMinValue(arg.extras.minValue);
              if ("maxValue" in arg.extras) option.setMaxValue(arg.extras.maxValue);
              if ("choices" in arg.extras) option.setChoices(arg.extras.choices.map(s => ({name: s, value: s})));
            } 
            return option;
          }

          if (arg.type == ArgType.STRING) slash.addStringOption(option => setOption(option));
          if (arg.type == ArgType.INTEGER) slash.addIntegerOption(option => setOption(option));
          if (arg.type == ArgType.USER) slash.addUserOption(option => setOption(option));
          if (arg.type == ArgType.CHANNEL) slash.addChannelOption(option => setOption(option));
          if (arg.type == ArgType.ROLE) slash.addRoleOption(option => setOption(option));
          if (arg.type == ArgType.BOOLEAN) slash.addBooleanOption(option => setOption(option));
          if (arg.type == ArgType.MENTIONABLE) slash.addMentionableOption(option => setOption(option));
          if (arg.type == ArgType.ATTACHMENT) slash.addAttachmentOption(option => setOption(option));
          if (arg.type == ArgType.NUMBER) slash.addNumberOption(option => setOption(option));
        });

      }

      slashCommands.push(slash);
    }

    const rest = new REST({ version: "10" }).setToken(this.token);
    try {
      this.logger.log("Started refreshing application (/) commands.");
    
      let res: any = await rest.put(Routes.applicationCommands(this.user.id), { body: slashCommands });
        
      this.logger.log(`Successfully reloaded application (/) commands.\n ${res.json()}`);
    } catch (error) {
      console.error(error);
    }

  }
  
  async reloadPlayers() {
    let fp = musicHelper.playerfilepath.replace(".json", ".json.gz");
    let i = 0;
    if (!fs.existsSync(fp)) {
      this.client.logger.log("No cache file to reload players from!");
      return; 
    }
    let gzbuff = fs.readFileSync(fp);
    let text = zlib.gunzipSync(gzbuff).toString();
    
    this.playerBackups = JSON.parse(text, (key, value) => {
      if(typeof value === "object" && value !== null) {
        if (value.dataType === "Map") {
          return new Map(value.value);
        }
      }
      return value;
    });

    this.playerBackups.forEach((val: any, key: string, map: Map<string, any>) => {
      if (!(val instanceof PlayerData)) {
        val = Object.assign(new PlayerData(
          val.vchannelid,
          val.boundChannelid,
          val.guildid,
          val.q_songs,
          val.q_currentSong,
          val.q_lastSong,
          val.volume,
          val.loop,
          val.queueLoop,
          val.paused,
          val.shuffle
        ), val);
        map.set(key, val);
      }
      let music = new musicHelper(this, key);
      //prayge
      (val as PlayerData).restore(music);
      i++;
    });
    this.logger.log(`Reloaded ${i} Players`);
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