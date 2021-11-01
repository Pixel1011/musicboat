const { MessageEmbed } = require("discord.js");
const musicHelper = require("../utils/musicHelper");
const Queue = require("../utils/queue");
// eslint-disable-next-line no-undef
const sleep = ms => new Promise(res => setTimeout(res, ms));

async function run(client, msg, args) {
  let music = new musicHelper(client, msg.guild.id);
  let vchannel = msg.member.voice.channel;
  let lavalink = client.lavalink;
  let player;

  // check if given search term and if not, see if a player already exists and see if user is trying to unpause
  if (!lavalink.players.get(msg.guild.id) || !lavalink.players.get(msg.guild.id).queue || !lavalink.players.get(msg.guild.id).queue.currentSong) {
    if (!args.join(" ")) {
      let embed = new MessageEmbed();
      embed.setTitle(":x: Invalid usage");
      embed.setDescription(`${client.prefix}play [Link or query]`);
      return msg.channel.send({
        embeds: [embed]
      });
    }
  } else {
    if (!args.join(" ")) {
      if (lavalink.players.get(msg.guild.id).paused) {
        await lavalink.players.get(msg.guild.id).resume();
        msg.channel.send("⏯ **Resuming** 👍");
        return;
      } else {
        return msg.channel.send(":x: **The player is not paused**");
        // let embed = new MessageEmbed();           // not sure which one to do here
        // embed.setTitle(":x: Invalid usage");
        // embed.setDescription(`${client.prefix}play [Link or query]`);
        // return msg.channel.send({embeds: [embed]});
      }
    }
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
    return msg.channel.send(`🙅 **No permission to join** \`\`${vchannel.name}\`\``);
  }
  if (!vchannel.speakable) {
    return msg.channel.send(`🙅 **No permission to speak in** \`\`${vchannel.name}\`\``);
  }

  // Join
  // check if not in vc already

  if (!msg.guild.me.voice.channelId) {
    player = await music.join(vchannel.id);
    msg.channel.send(`:thumbsup: **Joined** \`\`${vchannel.name}\`\` **and bound to** <#${msg.channel.id}>`); // store channel somewhere for queues
  } else {
    player = await lavalink.players.get(msg.guild.id);
    if (!player) player = await music.join(vchannel.id);
  }


  // search
  msg.channel.send(`:musical_note: **Searching** :mag_right: \`\`${args.join(" ")}\`\``);
  let results = await music.search(args.join(" "), "ytsearch:");
  let result = results.tracks[0];
  if (!result) {
    return msg.channel.send(":x: **No Matches**");
  }
  // play
  if (!player.queue) {
    player.queue = new Queue(client);
  }
  // if nothing in queue/nothing playing
  if (player.queue.currentSong == null || player.queue.currentSong == undefined) {
    player.skips = [];
    let success = await player.queue.add(result, msg.author);
    if (!success) {
      return msg.channel.send(":x: **This video cannot be played**");
    }
    player.play(result);
    msg.channel.send(`**Playing** :notes: \`\`${result.info.title}\`\` - Now!`);
    // register player events
    player.on("trackEnd", async (track, reason) => {
      client.logger.log(reason);
      if (!player.queue) return; // if disconnected while playing
      if ((player.queue.songs[0] || player.loop == true) && player.queue.currentSong) {
        if (reason == "REPLACED") await sleep(10000);
        if (!player.loop) player.queue.shift();
        sleep(300); // i swear to god this code is cursed it went back up to line 95 after coming here.. maybe i fixed it
        player.play(player.queue.currentSong.track);
      } else {
        // shift one last time to null currentSong from queue
        player.queue.shift();
        player.loop = false;
      }
    });
    player.on("trackException", async (track, error) => {
      client.logger.log(error);
      await sleep(2000);
    });
    player.on("trackStuck", (track, threshold) => {
      client.logger.log(threshold);
    });

  } else { // if is playing
    let success = await player.queue.add(result, msg.author);
    if (!success) {
      return msg.channel.send(":x: **This video cannot be played**");
    }
    let song = player.queue.songs.at(-1);
    // embed
    let avatarURL = song.requester.avatarURL({size: 4096});

    let songLength = music.time(song.length);

    let timeTillPlaying = 0;

    player.queue.songs.forEach(sng => {
      timeTillPlaying = timeTillPlaying + sng.length;
    });

    timeTillPlaying = timeTillPlaying + (player.queue.currentSong.length - player.position);
    timeTillPlaying = timeTillPlaying - song.length;
    
    timeTillPlaying = music.time(timeTillPlaying);

    let embed = new MessageEmbed();
    embed.setAuthor("Added to queue", avatarURL);
    embed.setDescription(`[**${song.title}**](${song.url})`);
    embed.addField("Channel", song.channel, true);
    embed.addField("Song Duration", `${songLength}`, true);
    embed.addField("Estimated time until playing", `${timeTillPlaying}`, true);
    embed.addField("Position in queue", `${player.queue.songs.length.toString()}`, true);
    embed.setThumbnail(song.thumbnail);
    embed.setColor(0x202225);
    msg.channel.send({embeds: [embed]});

  }


  // inactive timer
  if (client.inactiveStrikes.find(elm => elm.guild == msg.guild.id) == undefined) {
    client.inactiveStrikes.push({
      guild: msg.guild.id,
      strikes: 0,
      interval: this
    });
    let interval = setInterval(function () {
      if (player.playing && vchannel.members.size > 1) return client.inactiveStrikes.find(elm => elm.guild == msg.guild.id).strikes = 0;

      client.inactiveStrikes.find(elm => elm.guild == msg.guild.id).strikes++;

      if (client.inactiveStrikes.find(elm => elm.guild == msg.guild.id).strikes == 10) {
        music.destroyPlayer();
      }
    }, 2 * 60 * 1000); // every 2 mins, 5 strikes = 10mins

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