const { MessageEmbed } = require("discord.js");
const musicHelper = require("../utils/musicHelper");
async function run(client, msg) {
  const music = new musicHelper(client, msg.guild.id);
  if (!await music.check(msg, true, true, false, false)) return;
  let player = music.getPlayer();
  let currentSong = player.queue.currentSong;

  let avatarURL = client.user.displayAvatarURL({size:4096});
  let title = currentSong.title;
  let url = currentSong.url;

  let timePlayed = Date.now() - player.playingSince;
  let timePlayedMin = Math.floor(timePlayed / 1000 / 60);
  let TimePlayedSec = Math.floor(timePlayed / 1000 - (timePlayedMin * 60)).toLocaleString("en-GB", {minimumIntegerDigits: 2});

  let timeToPlay = currentSong.length;
  let timeToPlayMin = Math.floor(timeToPlay / 1000 / 60);
  let timeToPlaySec = Math.floor(timeToPlay / 1000 - (timeToPlayMin * 60)).toLocaleString("en-GB", {minimumIntegerDigits: 2});

  let requester = currentSong.requester.tag;
  
  let dashes = "▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬";
  let dot = "🔘"; // WHO MADE THIS SINGLE THING 2 CHARACTERS

  timePlayed = (Date.now() - player.playingSince) / 1000;
  timeToPlay = currentSong.length / 1000;
  let index = Math.floor((timePlayed/timeToPlay) * 30);
  if (index >= 30) index = 29; // just incase
  dashes = dashes.substr(0, index) + dot + dashes.substr(index + dot.length);
  dashes = dashes.replace(dot, dot + "▬"); // grr

  let embed = new MessageEmbed();
  embed.setAuthor("Now Playing ♪", avatarURL);
  embed.setThumbnail(currentSong.thumbnail);
  embed.setDescription(`[${title}](${url})\n\n\`\`${dashes}\`\`\n\n\`\`${timePlayedMin}:${TimePlayedSec} / ${timeToPlayMin}:${timeToPlaySec}\`\`\n\n \`\`Requested by:\`\` ${requester}`);
  msg.channel.send({embeds: [embed]});


}
module.exports.data = {
  name: "np",
  description: "Shows the current playing song",
  aliases: ["nowplaying"],
  hide: false,
  run: run
};