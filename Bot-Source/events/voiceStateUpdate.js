const musicHelper = require("../utils/musicHelper");

// handle random leaving of bot or moving of channel
module.exports = async function (oldState, newState) {
  let client = oldState.guild.client;
  let lavalink = client.lavalink;
  const sleep = ms => new Promise(res => setTimeout(res, ms));
  // if there is channel change
  if (newState.channelId == oldState.channelId) return;
  // if it is bot
  if ((newState.id != client.user.id) || (oldState.id != client.user.id)) return;
  const music = new musicHelper(client, newState.guild.id);

  // leaving handle
  let player = music.getPlayer();
  if (!player) return;
  if (newState.channelId == null) {
    music.destroyPlayer();
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