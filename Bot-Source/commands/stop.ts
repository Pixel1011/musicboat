import type { musicBot } from "../client";
import { ArgOption, ArgType, Command } from "../Structures/Command";
import { musicHelper } from "../utils/musicHelper";
import type { UnifiedData } from "../utils/SlashUnifier";

export default class StopCmd extends Command {
  constructor() {
    super();
    this.name =  "stop";
    this.description =  "Stops the bot playing and clears the queue, optionally leaving";
    this.aliases =  [];
    this.hide =  false;
    this.arguments =  [
      new ArgOption("leave", "Whether to stay or leave (Default: false)", false, ArgType.BOOLEAN)
    ];
  }

  async run(client: musicBot, data: UnifiedData, args: string[]) {
    const music = new musicHelper(client, data.guild.id);
    if (!await music.check(data)) return;
    if (!await music.PermsOrAloneCheck(data, true, true)) return;
    let player = music.getPlayer();
    let toLeave = args.join().toLowerCase();

    if (toLeave == "true" || toLeave == "leave" || toLeave == "yes") {
      music.destroyPlayer();
    } else {
      player.queue.songs = [];
      player.loop = false;
      player.queueLoop = false;
      player.shuffle = false;
      await music.skip();
      music.save();
    }
    data.send("🛑 Stopped playing and cleared the queue.");
  }
  
}