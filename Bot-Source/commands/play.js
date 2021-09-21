const { MessageEmbed } = require("discord.js");
const musicHelper = require("../utils/musicHelper");
const Queue = require("../utils/queue");
async function run(client, msg, args) {
  let music = new musicHelper(client);
  let vchannel = msg.member.voice.channel;
  let lavalink = client.lavalink;
  let player;

  // check if given search term
  if(args.join(" ") == "") {
    let embed = new MessageEmbed();
    embed.setTitle(":x: Invalid usage");
    embed.setDescription(`${client.prefix}play [Link or query]`);
    return msg.channel.send({embeds: [embed]});
  }
  
  // check if user in same vc
  
  if (!vchannel) {
    return msg.channel.send(":x: **You have to be in a voice channel to use this command.**");
  }

  if ((vchannel.id != msg.guild.me.voice.channelId) && msg.guild.me.voice.channelId != null) {
    return msg.channel.send(":x: **You have to be in the same voice channel to use this command**");
  }

  // check perms to join channel
  if (!vchannel.joinable) {
    return msg.channel.send(":x: **Your channel is not joinable**");
  }
  if (!vchannel.speakable) {
    return msg.channel.send(":x: **The bot cannot speak in your channel**");
  }

  // Join
  // check if not in vc already

  if (!msg.guild.me.voice.channelId) {
    player = await music.join(msg.guild.id, vchannel.id);
    msg.channel.send(`:thumbsup: **Joined** \`\`${vchannel.name}\`\` **and bound to** <#${msg.channel.id}>`); // store channel somewhere for queues
  } else {
    player = await lavalink.players.get(msg.guild.id);
    if (!player) player = await music.join(msg.guild.id, vchannel.id);
  }


  // search
  msg.channel.send(`:musical_note: **Searching** :mag_right: \`\`${args.join(" ")}\`\``);
  let results = await music.search(args.join(" "), "ytsearch:");
  let result = results.tracks[0];
  if(!result) {
    return msg.channel.send(":x: **No Matches found**");
  }
  // play
  if(!player.queue) {
    player.queue = new Queue(client);
  }
  if(player.queue.currentSong == null || player.queue.currentSong == undefined) {
    await player.queue.add(result, msg.author);
    player.play(result);
    msg.channel.send(`**Playing** :notes: \`\`${result.info.title}\`\` - Now!`);
    // register player events
    player.on("trackEnd", (track, reason) => {
      if(player.queue.songs[0] != undefined || player.queue.songs[0] != null) {
        player.queue.shift();
        player.play(player.queue.currentSong.track);
      } else {
        // shift one last time to null currentSong from queue
        player.queue.shift();
      }
    });

  } else {
    await player.queue.add(result, msg.author);
    let song = player.queue.songs.at(-1);
    let avatarURL = song.requester.avatarURL({size:4096});

    var playMin= Math.floor(song.length / 1000 / 60);
    var playSec = Math.floor(song.length / 1000 - (playMin * 60)).toLocaleString("en-GB", {minimumIntegerDigits: 2});

    let timeTillPlaying = 0;

    player.queue.songs.forEach(song => {
      timeTillPlaying = timeTillPlaying + song.length;
    });
    let playingFor = new Date().getTime() - player.playingSince;
    timeTillPlaying = timeTillPlaying - song.length;
    timeTillPlaying = timeTillPlaying + song.length - playingFor;
    var timeTillPlayMin= Math.floor(timeTillPlaying / 1000 / 60);
    var timeTillPlaySec = Math.floor(timeTillPlaying / 1000 - (timeTillPlayMin * 60)).toLocaleString("en-GB", {minimumIntegerDigits: 2});

    let embed = new MessageEmbed();
    embed.setAuthor("", avatarURL);
    embed.setDescription(`**${song.title}**`);
    embed.setTitle("**Added to queue**");
    embed.addField("**Channel**", song.channel, true);
    embed.addField("**Song Duration**", `${playMin}:${playSec}`, true);
    embed.addField("**Estimated time until playing**", `${timeTillPlayMin}:${timeTillPlaySec}`, true);
    embed.addField("**Position in queue**", `${player.queue.songs.length.toString()}`, true);
    embed.setThumbnail(song.thumbnail);
    msg.channel.send({embeds: [embed]});
    // embed
  }


  // inactive timer
  if (client.inactiveStrikes.find(elm => elm.guild == msg.guild.id) == undefined) {
    client.inactiveStrikes.push({
      guild: msg.guild.id,
      strikes: 0,
      interval: this
    });
    let interval = setInterval(function() { 
      if(player.playing || vchannel.members.size > 1) return client.inactiveStrikes.find(elm => elm.guild == msg.guild.id).strikes = 0;

      client.inactiveStrikes.find(elm => elm.guild == msg.guild.id).strikes++;

      if (client.inactiveStrikes.find(elm => elm.guild == msg.guild.id).strikes == 5) {
        clearInterval(this);
        player.disconnect();
        let index = client.inactiveStrikes.findIndex(elm => elm.guild == msg.guild.id);
        client.inactiveStrikes.splice(index, 1);
      }
    }, 2 * 60 * 1000);

    client.inactiveStrikes.find(elm => elm.guild == msg.guild.id).interval = interval;
  }
}
module.exports.data = {
  name: "play",
  description: "plays a song",
  aliases: ["p"],
  hide: false, // hide from help command
  run: run
};