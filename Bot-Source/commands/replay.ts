import type { musicBot } from "../client";
import { Command } from "../Structures/Command";
import { musicHelper } from "../utils/musicHelper";
import type { UnifiedData } from "../utils/SlashUnifier";

export default class ReplayCmd extends Command {
  constructor() {
    super();
    this.name =  "replay";
    this.description =  "Resets the current progress of the song";
    this.aliases =  [""];
    this.hide =  false;
    this.arguments =  [];
  }
  
  async run(client: musicBot, data: UnifiedData) {
    const music = new musicHelper(client, data.guild.id);
    let player = music.getPlayer();
    if (!await music.PermsOrAloneCheck(data, true , true)) return;
    if (!player || (!player.queue.currentSong && !player.queue.lastSong)) return data.send(":x: **Nothing to replay!**"); // check responses later
    if (player.playing && (player.queue || player.queue.currentSong)) {
    // if playing, seek song back to 0
      player.seek(0);
      data.send(":musical_note: **Song progress reset** :track_previous:");
    } else {
    // if not playing, play last song
      let lastSong = player.queue.lastSong;
      player.queue.songs.unshift(lastSong);
      player.queue.shift(false, false);
      player.play(lastSong.encoded);
      data.send(":musical_note: **Song progress reset** :track_previous:");
      music.save();
    }
  }

}