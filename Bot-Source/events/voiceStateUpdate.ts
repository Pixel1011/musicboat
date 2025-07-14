import type { musicBot } from "../client";
import { musicHelper } from "../utils/musicHelper";

// handle random leaving of bot or moving of channel
export default async function (oldState: any, newState: any, client: musicBot) {
  const sleep = (ms: number) => new Promise(res => setTimeout(res, ms));
  // if there is channel change
  if (newState.channelId == oldState.channelId) return;
  // if it is bot
  if ((newState.id != client.user.id) || (oldState.id != client.user.id)) return;
  const music = new musicHelper(client, newState.guild.id);

  // leaving handle
  let player = music.getPlayer();
  if (!player) return;

  // if disconnected while playing, this ends up causing destroyPlayer happening twice as when its called first time, it disconnects, leading to this
  // doesnt seem to cause problems but is a note
  if (newState.channelId == null) {
    music.destroyPlayer();
  } else

  // handle being moved
  if ((oldState.channelId != null) && (oldState.channelId != newState.channelId)) {
    await player.pause();
    await player.voice.connect(newState.channelId);
    await sleep(1000); // wait for connect?
    await player.resume();
    client.logger.log("handling a move");
    music.save();
  }
  // so uh i have now figured out that i dont need to this because player has its own events which arent documented... but this works so its staying :)

}