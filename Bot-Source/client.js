const Discord = require("discord.js");
const logger = require("./utils/logger.js");
const fs = require("fs");
const path = require("path");
const Flags = Discord.Intents.FLAGS;
const { Node } = require("lavaclient");


class musicBot {
  constructor(token, prefix, num) {
    this.client = new Discord.Client({
      intents: [Flags.DIRECT_MESSAGES, Flags.DIRECT_MESSAGE_REACTIONS, Flags.GUILDS, Flags.GUILD_EMOJIS_AND_STICKERS, Flags.GUILD_INTEGRATIONS, Flags.GUILD_INVITES, Flags.GUILD_MEMBERS, Flags.GUILD_MESSAGES, Flags.GUILD_MESSAGE_REACTIONS, Flags.GUILD_PRESENCES, Flags.GUILD_VOICE_STATES] // thats probably fine.. jesus
    });
    this.client.botnum = num + 1;
    this.aliasnum = 0;
    this.client.logger = new logger(this.client);
    this.client.commands = [];
    this.client.inactiveStrikes = []; // reminder to change to per player instead of on client
    this.client.config = require("./config.json");
    this.token = token;
    this.client.prefix = prefix;
    this.client.boat = this;
    this.init();
  }
  async ReloadCommands() {
    this.client.commands = [];
    // load normal commands and aliases
    const files = fs.readdirSync(path.resolve("./", "commands"));
    files.forEach(file => {
      try {
        let cmd = require(`./commands/${file}`);
        this.client.commands[cmd.data.name] = cmd;
        // register aliases the command may have
        if (cmd.data.aliases != null && cmd.data.aliases.length != 0) {
          cmd.data.aliases.forEach(alias => {
            this.client.commands[alias] = cmd;
            this.aliasnum++;
          });
        }
      } catch (e) {
        throw `Failed to load ${file}\n${e.stack}`;
      }
    });
    // todo - load up slash commands


  }
  // init
  // login, load commands, event handling etc
  async init() {
    await this.client.login(this.token);
    this.client.logger.log("Initializing..");

    // load commands
    await this.ReloadCommands();

    this.client.logger.log(`${Object.keys(this.client.commands).length - this.aliasnum} Commands loaded with ${this.aliasnum} aliases.`);
    // lavalink stuff
    const info = {
      host: "localhost",
      port: 2333,
      password: "youshallnotpass"
    };

    this.client.lavalink = new Node({
      connection: info,
      sendGatewayPayload: (id, payload) => this.client.guilds.cache.get(id).shard.send(payload)
    });

    // load events
    this.client.ws.on("VOICE_SERVER_UPDATE", data => this.client.lavalink.handleVoiceUpdate(data));
    this.client.ws.on("VOICE_STATE_UPDATE", data => this.client.lavalink.handleVoiceUpdate(data));
    this.client.lavalink.on("connect", () => require("./events/lavaConnect")(this.client));
    this.client.lavalink.on("error", (e) => require("./events/lavaError")(e, this.client));
    this.client.on("ready", (client) => require("./events/ready")(client));
    this.client.on("messageCreate", (msg) => require("./events/messageCreate")(msg));
    this.client.on("voiceStateUpdate", (oldState, newState) => require("./events/voiceStateUpdate")(oldState, newState));
    //
    this.client.lavalink.connect(this.client.user.id);

  }

}
module.exports = musicBot;