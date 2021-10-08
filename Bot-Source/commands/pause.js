const musicHelper = require("../utils/musicHelper");

async function run(client, msg, args) {
  const music = new musicHelper(client, msg.guild.id);
  let player = music.getPlayer();
  let vchannel = msg.member.voice.channel;
  // check if playing
  if (!player) {
    return msg.channel.send(":x: **Bot is not currently playing**");
  }
  if(!player.playing && !player.queue.currentSong) {
    return msg.channel.send(":x: **Bot is not currently playing**");
  }
  
  if (!vchannel) {
    return msg.channel.send(":x: **You have to be in a voice channel to use this command.**");
  }
  
  if ((vchannel.id != msg.guild.me.voice.channelId) && msg.guild.me.voice.channelId != null) {
    return msg.channel.send(":x: **You have to be in the same voice channel to use this command**");
  }
  //

  if(player.paused) {
    msg.channel.send(":x: **The player is already paused**");
  } else {
    await player.pause();
    msg.channel.send("**Paused** ⏸");
  }


}
module.exports.data = {
  name: "pause",
  description: "Pauses the current song",
  aliases: [],
  hide: false,
  run: run
};