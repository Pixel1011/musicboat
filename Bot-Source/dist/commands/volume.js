"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = void 0;
const Command_1 = require("../Structures/Command");
const musicHelper_1 = require("../utils/musicHelper");
function isNumeric(str) {
    return !isNaN(Number(str)) && !isNaN(parseFloat(str));
}
async function run(client, data, args) {
    const music = new musicHelper_1.musicHelper(client, data.guild.id);
    if (!await music.check(data, true, false, true, true))
        return;
    let player = music.getPlayer();
    let vol = args.join(" ");
    if (vol == "") {
        return data.send(`🎵 **The current volume is at** \`\`${player.volume}%\`\``);
    }
    if (!isNumeric(vol))
        return data.send(":x: **This value is not a number!**");
    let Ivol = Number(vol);
    if (Ivol > 2147483647)
        return data.send(":x: **The volume cannot be set this high!**");
    await music.setVolume(Ivol);
    return data.send(`🎵 **Set volume to ${vol}%** 👍`);
}
exports.data = {
    name: "volume",
    description: "Outputs or changes the current volume",
    aliases: ["v", "vol"],
    hide: false,
    arguments: [
        new Command_1.ArgOption("volume", "Volume to set to (1-2147483647)", false, Command_1.ArgType.INTEGER)
    ],
    run: run
};
//# sourceMappingURL=volume.js.map