import type { musicBot } from "../client";
import { Command } from "../Structures/Command";
import type { UnifiedData } from "../utils/SlashUnifier";

export default class PingCmd extends Command {
  constructor() {
    super();
    this.name =  "ping";
    this.description =  "pong";
    this.aliases =  [];
    this.hide =  false;
    this.arguments =  [];
  }

  async run(client: musicBot, data: UnifiedData) {
    data.send("Pong!").then(msg2 => {
      msg2.edit(`Pong! \`${msg2.createdTimestamp - data.createdTimestamp}ms\``);
    });
    client.logger.log("ping test");
  }

}