import { musicHelper } from "../utils/musicHelper";
import type { VoiceChannel } from "discord.js";
import type { musicBot } from "../client";
import type { UnifiedData } from "../utils/SlashUnifier";

async function run(client: musicBot, data: UnifiedData) {
  const music = new musicHelper(client, data.guild.id);
  if (!await music.check(data, false, false, true, false)) return;
  let vchannel = data.member.voice.channel as VoiceChannel;
  let player = music.getPlayer();

  // check if bot already in vc
  if (data.guild.members.me.voice.channelId == vchannel.id && player) {
    return data.send(":x: **I am already connected to your channel**");
  }
  if (data.guild.members.me.voice.channelId && player) {
    return data.send(":x: **You cannot summon the bot as it is playing elsewhere**");
  }

  if (!vchannel.joinable) {
    return data.send(":x: **Your channel is not joinable**");
  }
  if (!vchannel.speakable) {
    return data.send(":x: **The bot cannot speak in your channel**");
  }

  await music.join(vchannel.id);
  data.send(`:thumbsup: **Joined** \`\`${vchannel.name}\`\` **and bound to** <#${data.channel.id}>`);


}
export const data = {
  name: "join",
  description: "Summons the bot to the voice channel you are in.",
  aliases: ["summon"],
  hide: false,
  arguments: [],
  run: run
};