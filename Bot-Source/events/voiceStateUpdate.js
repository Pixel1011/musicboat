
// handle random leaving of bot or moving of channel
module.exports = async function (oldState, newState) {
  let client = oldState.guild.client;
  let lavalink = client.lavalink;
  const sleep = ms => new Promise(res => setTimeout(res, ms));
  // if there is channel change
  if (newState.channelId == oldState.channelId) return;
  // if it is bot
  if ((newState.id != client.user.id) || (oldState.id != client.user.id)) return;

  // leaving handle
  let player = lavalink.players.get(newState.guild.id);
  if (!player) return;
  if (newState.channelId == null) {
    client.logger.log("handling a leave");
    player.destroy();
    player.disconnect();
    if(client.inactiveStrikes.find(elm => elm.guild == newState.guild.id) != undefined) {
      clearInterval(client.inactiveStrikes.find(elm => elm.guild == newState.guild.id).interval);
    }
  } else

  // handle being moved
  if ((oldState.channelId != null) && (oldState.channelId != newState.channelId)) {
    await player.pause();
    await player.connect(newState.channelId);
    await sleep(1000); // wait for connect?
    await player.resume();
    client.logger.log("handling a move");
  }
  // so uh i have now figured out that i dont need to this because player has its own events which arent documented... but this works so its staying :)

};