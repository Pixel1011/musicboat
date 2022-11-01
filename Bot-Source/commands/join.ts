import { musicHelper } from "../utils/musicHelper";
import type { Message, VoiceChannel } from "discord.js";
import type { musicBot } from "../client";

async function run(client: musicBot, msg: Message) {
  const music = new musicHelper(client, msg.guild.id);
  if (!await music.check(msg, false, false, true, false)) return;
  let vchannel = msg.member.voice.channel as VoiceChannel;
  let player = music.getPlayer();

  // check if bot already in vc
  if (msg.guild.members.me.voice.channelId == vchannel.id && player) {
    return msg.channel.send(":x: **I am already connected to your channel**");
  }
  if (msg.guild.members.me.voice.channelId && player) {
    return msg.channel.send(":x: **You cannot summon the bot as it is playing elsewhere**");
  }

  if (!vchannel.joinable) {
    return msg.channel.send(":x: **Your channel is not joinable**");
  }
  if (!vchannel.speakable) {
    return msg.channel.send(":x: **The bot cannot speak in your channel**");
  }

  await music.join(vchannel.id);
  msg.channel.send(`:thumbsup: **Joined** \`\`${vchannel.name}\`\` **and bound to** <#${msg.channel.id}>`);


}
export const data = {
  name: "join",
  description: "Summons the bot to the voice channel you are in.",
  aliases: ["summon"],
  hide: false,
  run: run
};