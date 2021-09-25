async function run(client, msg) {

  let vchannel = msg.member.voice.channel;
  let player = client.lavalink.players.get(msg.guild.id);
  // check if playing
  if (!player) {
    return msg.channel.send(":x: **Bot is not currently playing**");
  }
  if(!player.playing && !player.queue.currentSong) {
    return msg.channel.send(":x: **Bot is not currently playing**");
  }
  // check if user in same vc
  
  if (!vchannel) {
    return msg.channel.send(":x: **You have to be in a voice channel to use this command.**");
  }
  
  if ((vchannel.id != msg.guild.me.voice.channelId) && msg.guild.me.voice.channelId != null) {
    return msg.channel.send(":x: **You have to be in the same voice channel to use this command**");
  }

  if(player.loop == undefined || player.loop == false) {
    player.loop = true;
    return msg.channel.send("🔂 **Enabled!**");
  } else {
    player.loop = false;
    return msg.channel.send("🔂 **Disabled!**");
  }




}
module.exports.data = {
  name: "loop",
  description: "Loops the current song",
  aliases: [],
  hide: false,
  run: run
};