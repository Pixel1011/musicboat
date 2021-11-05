const { MessageEmbed } = require("discord.js");
const musicHelper = require("../utils/musicHelper");

async function run(client, msg, args) {
  const music = new musicHelper(client, msg.guild.id);
  if (!await music.check(msg, true, true, false, false)) return;
  let player = music.getPlayer();

  let pages = Math.ceil(player.queue.songs.length / 10);
  if (pages == 0) pages = 1;
  let page = 1;
  if(args.join(" ")) page = args.join(" ");
  if(isNaN(page)) page = 1;
  if (page > pages) return msg.channel.send(`:x: **There is no page \`\`${page}\`\`**`);

  let currentSong = player.queue.currentSong;
  let desc = [];

  if (page == 1) {
    desc.push("__Now Playing:__");
    desc.push(await songString(currentSong, msg.guild));
  }
  if (player.queue.songs[0]) {
    if (page == 1) desc.push("\n__Up Next:__");

    for (let i = (page * 10) - 10; i < (page * 10); i++) {
      let song = player.queue.songs[i];
      if (!song) break; 
      desc.push("\n" + `\`\`${i+1}.\`\` ` + await songString(song, msg.guild));
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
    
  let embed = new MessageEmbed();
  embed.setTitle(`Queue for ${msg.guild.name}`);
  embed.setURL(client.config.website);
  embed.setDescription(desc.join("\n"));
  embed.setFooter(`Page ${page}/${pages} | Loop: ${loopEmote} | Queue Loop: ${queueLoopEmote}`, msg.author.avatarURL({size:2048}));

  msg.channel.send({embeds: [embed]});

}

async function songString(song, guild) {
  let songname = song.title;
  let link = song.url;

  let timeToPlay = song.length;
  let timeToPlayMin = Math.floor(timeToPlay / 1000 / 60);
  let timeToPlaySec = Math.floor(timeToPlay / 1000 - (timeToPlayMin * 60)).toLocaleString("en-GB", {minimumIntegerDigits: 2});
  let time = `${timeToPlayMin}:${timeToPlaySec}`;

  let displayName = guild.members.cache.get(song.requester.id).displayName;
  let tag = song.requester.tag;

  return `[${songname}](${link}) | \`${time} Requested by: ${displayName} (${tag})\``;
}

module.exports.data = {
  name: "queue",
  description: "Shows the server's music queue",
  aliases: ["q"],
  hide: false,
  run: run
};