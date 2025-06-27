import type { musicBot } from "../client";
import { Command } from "../Structures/Command";
import type { UnifiedData } from "../utils/SlashUnifier";

export default class TestCmd extends Command {
  constructor() {
    super();
    this.name =  "test";
    this.description =  "tests things";
    this.aliases =  [];
    this.hide =  true; // hide from help command
    this.arguments =  [];
  }
  async run(client: musicBot, data: UnifiedData) {
    data.send("Pong!");
    data.send("uh oh");
    data.send("UH OHHHH");
  }

}