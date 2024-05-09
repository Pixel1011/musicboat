import { Guild, EmbedBuilder } from "discord.js";
import type { musicBot } from "../client";
import { musicHelper } from "../utils/musicHelper";
import type { QueueSong } from "../Structures/Song";
import type { UnifiedData } from "../utils/SlashUnifier";
import { ArgOption, ArgType } from "../Structures/Command";

async function run(client: musicBot, data: UnifiedData, args: string[]) {
  const music = new musicHelper(client, data.guild.id);
  if (!await music.check(data, true, true, false, false)) return;
  let player = music.getPlayer();

  let pages = Math.ceil(player.queue.songs.length / 10);
  if (pages == 0) pages = 1;
  let page = 1;
  if(args.join(" ")) page = Number(args.join(" "));
  if(isNaN(page)) page = 1;
  if (page > pages) return data.send(`:x: **There is no page \`\`${page}\`\`**`);

  let currentSong = player.queue.currentSong;
  let desc = [];

  if (page == 1) {
    desc.push("__Now Playing:__");
    desc.push(await songString(currentSong, data.guild));
  }
  if (player.queue.songs[0]) {
    if (page == 1) desc.push("\n__Up Next:__");

    for (let i = (page * 10) - 10; i < (page * 10); i++) {
      let song = player.queue.songs[i];
      if (!song) break; 
      desc.push("\n" + `\`\`${i+1}.\`\` ` + await songString(song, data.guild));
    }

    let queueLength = 0;

    player.queue.songs.forEach(sng => {
      queueLength = queueLength + sng.length;
    });

    //queueLength = queueLength + (player.queue.currentSong.length - player.position);
    let text = player.queue.songs.length > 1 ? "songs" : "song";
    desc.push("\n" + `**${player.queue.songs.length} ${text} in queue | ${music.time(queueLength)} total length**`);
  }

  let loopEmote = "❌";
  if(player.loop) loopEmote = "✅";
  let queueLoopEmote = "❌";
  if(player.queueLoop) queueLoopEmote = "✅";
    
  let embed = new EmbedBuilder();
  embed.setTitle(`Queue for ${data.guild.name}`);
  embed.setURL(client.config.website);
  embed.setDescription(desc.join("\n"));
  embed.setFooter({
    text: `Page ${page}/${pages} | Loop: ${loopEmote} | Queue Loop: ${queueLoopEmote}`,
    iconURL: data.author.avatarURL({size:2048})
  });

  data.send({embeds: [embed]});

}

async function songString(song: QueueSong, guild: Guild) {
  let songname = song.title;
  let link = song.url;

  let timeToPlay = song.length;
  let timeToPlayMin = Math.floor(timeToPlay / 1000 / 60);
  let timeToPlaySec = Math.floor(timeToPlay / 1000 - (timeToPlayMin * 60)).toLocaleString("en-GB", {minimumIntegerDigits: 2});
  let time = `${timeToPlayMin}:${timeToPlaySec}`;
  if (song.isStream) time = "LIVE";
  let displayName = guild.members.cache.get(song.requester.id).displayName;

  return `[${songname}](${link}) | \`${time} Requested by: ${displayName}\``;
}

export const data = {
  name: "queue",
  description: "Shows the server's music queue",
  aliases: ["q"],
  hide: false,
  arguments: [
    new ArgOption("page", "Page number to list (Default: 1)", false, ArgType.INTEGER)
  ],
  run: run
};