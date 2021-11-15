/* eslint-disable no-useless-escape */
const { MessageEmbed } = require("discord.js");
const musicHelper = require("../utils/musicHelper");
const Queue = require("../utils/queue");


async function run(client, msg, args) {
  let music = new musicHelper(client, msg.guild.id);
  let vchannel = msg.member.voice.channel;
  let lavalink = client.lavalink;
  let spotify = lavalink.spotify;
  let player;
  let youtubeVideoRegex = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;
  let youtubePlaylistRegex =  /^.*(youtu.be\/|list=)([^#\&\?]*).*/;

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

  if (!player.queue) {
    player.queue = new Queue(client);
  }


  // search
  let result;
  let results; // pure spaghetti
  let isPlaylist = false;
  let playlistName = "";
  let playlistThumb = "";
  let totalTracks = 0;
  let tracks;
  msg.channel.send(`:musical_note: **Searching** :mag_right: \`\`${args.join(" ")}\`\``);

  if (spotify.isSpotifyUrl(args.join(" "))) {
    results = await music.loadSpotify(args.join(" "));

    if (results.data.type == "track") {
      result = await results.resolveYoutubeTrack();
      result.info.url = results.data.external_urls.spotify;
      result.info.thumbnail = results.data.album.images[0].url;
      result.info.title = results.data.name;
      result.info.spotify = true;

    } else if(results.data.type == "playlist") {
      isPlaylist = true;
      tracks = await results.resolveYoutubeTracks();
      let i = 0;
      tracks.forEach(t => {
        t.info.spotify = true;
        t.info.url = results.tracks[i].data.external_urls.spotify;
        t.info.thumbnail = results.tracks[i].data.album.images[0].url;
        t.info.title = results.tracks[i].data.name;
        i++;
      });
      playlistName = results.data.name;
      totalTracks = results.data.tracks.total;
      playlistThumb = results.data.images[0].url;
      result = tracks[0];
    }

  } else {
    if (youtubeVideoRegex.test(args.join(" "))) {
      if (youtubePlaylistRegex.test(args.join(" "))) {
        // youtube playlist
        results = await music.search(args.join(" "));
        isPlaylist = true;
        tracks = results.tracks;
        totalTracks = tracks.length;
        playlistName = results.playlistInfo.name;
        playlistThumb = await player.queue.getThumbnail(tracks[0]);

        let selectedTrack = results.playlistInfo.selectedTrack;
        result = tracks[selectedTrack];

      } else {
        // youtube link
        results = await music.search(args.join(" "));
        result = results.tracks[0];
      }
    } 

    // normal search if its not a link
    if (!result) {
      results = await music.search(args.join(" "), "ytsearch:");
      result = results.tracks[0];
    }
  }
  if (!result) {
    return msg.channel.send(":x: **No Matches**");
  }
  // play
  // if nothing in queue/nothing playing
  if (player.queue.currentSong == null || player.queue.currentSong == undefined) {
    player.skips = [];
    let success = await player.queue.add(result, msg.author);
    if (!success) {
      return msg.channel.send(":x: **This video cannot be played**");
    }

    // if playlist with more than 1 song
    if (isPlaylist && tracks[1]) {
      tracks.shift();

      for (let i in tracks) {
        let t = tracks[i];
        if (!t) break;
        await player.queue.add(t, msg.author);
      }
      // playlist embed
      let avatarURL = msg.author.avatarURL({size: 4096});
      let timeTillPlaying = "Now!"; // nothing else in queue

      let embed = new MessageEmbed();
      embed.setAuthor("Playlist added to queue", avatarURL);
      embed.setDescription(`**${playlistName}**`);
      embed.addField("Estimated time until playing", `${timeTillPlaying}`, true);
      embed.addField("Position in queue", "1", true);
      embed.addField("Enqueued", `\`\`${totalTracks}\`\` songs`, true);
      embed.setThumbnail(playlistThumb);
      embed.setColor(0x202225);
      msg.channel.send({embeds: [embed]});

    }

    player.play(result);
    msg.channel.send(`**Playing** :notes: \`\`${result.info.title}\`\` - Now!`);
    // register player events
    if (!player.eventsCreated) {
      let TrackEnd = require("../events/PlayerEvents/trackEnd");
      let EndClass = new TrackEnd(music);
      player.on("trackEnd", async (track, reason) => EndClass.handle(track, reason));

      let TrackException = require("../events/PlayerEvents/trackException");
      let ExceptionClass = new TrackException(music);
      player.on("trackException", (track, error) => ExceptionClass.handle(track, error));

      let TrackStuck = require("../events/PlayerEvents/trackStuck");
      let StuckClass = new TrackStuck(music);
      player.on("trackStuck", (track, threshold) => StuckClass.handle(track, threshold));
      player.eventsCreated = true;
    }
  } else { // if is playing
    let success = await player.queue.add(result, msg.author);
    if (!success) {
      return msg.channel.send(":x: **This video cannot be played**");
    }
    // if playlist
    if (isPlaylist && tracks[0]) {
      tracks.forEach(async t => {
        await player.queue.add(t, msg.author);
      });
      // playlist embed
      let avatarURL = msg.author.avatarURL({size: 4096});
      let timeTillPlaying = "Now!"; // nothing else in queue

      let embed = new MessageEmbed();
      embed.setAuthor("Playlist added to queue", avatarURL);
      embed.setDescription(`**${playlistName}**`);
      embed.addField("Estimated time until playing", `${timeTillPlaying}`, true);
      embed.addField("Position in queue", `${player.queue.songs.length - totalTracks + 1}`, true);
      embed.addField("Enqueued", `\`\`${totalTracks}\`\` songs`, true);
      embed.setThumbnail(playlistThumb);
      embed.setColor(0x202225);
      msg.channel.send({embeds: [embed]});

    } else { // 1 song
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
      embed.addField("Position in queue", `${player.queue.songs.length}`, true);
      embed.setThumbnail(song.thumbnail);
      embed.setColor(0x202225);
      msg.channel.send({embeds: [embed]});

    }
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
    }, 2 * 60 * 1000); // every 2 mins, 10 strikes = 20mins

    client.inactiveStrikes.find(elm => elm.guild == msg.guild.id).interval = interval;
  }
}

module.exports.data = {
  name: "play",
  description: "Plays a song with the given name or url.",
  aliases: ["p"],
  hide: false, // hide from help command
  run: run
};