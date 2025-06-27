import { musicHelper } from "../utils/musicHelper";
import type { musicBot } from "../client";
import type { UnifiedData } from "../utils/SlashUnifier";
import { Command } from "../Structures/Command";

export default class LeaveCmd extends Command {
  constructor() {
    super();
    this.name =  "leave";
    this.description =  "Disconnects the bot from the voice channel it is in.";
    this.aliases =  ["disconnect", "dc", "dis"];
    this.hide =  false;
    this.arguments =  [];
  }

  async run(client: musicBot, data: UnifiedData) {
    const music = new musicHelper(client, data.guild.id);
    if (!await music.check(data, false, false, true, true)) return;
    let player = music.getPlayer();

    if (!data.guild.members.me.voice.channelId || !player) {
      return data.send(`:x: **I am not connected to a voice channel.** Type ${client.prefix}join to get me in one`);
    }

    music.destroyPlayer();
    data.send(":mailbox_with_no_mail: **Successfully disconnected**");

  }
}