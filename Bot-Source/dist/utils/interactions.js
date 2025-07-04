"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPagesRow = void 0;
const discord_js_1 = require("discord.js");
function getPagesRow(disabledMap, addCancel = true) {
    const components = [
        new discord_js_1.ButtonBuilder().setEmoji("◀️").setStyle(discord_js_1.ButtonStyle.Primary).setCustomId("left").setDisabled(disabledMap.get("left")),
        new discord_js_1.ButtonBuilder().setEmoji("▶️").setStyle(discord_js_1.ButtonStyle.Primary).setCustomId("right").setDisabled(disabledMap.get("right")),
    ];
    let btn = new discord_js_1.ButtonBuilder().setLabel("Cancel").setStyle(discord_js_1.ButtonStyle.Danger).setCustomId("cancel").setDisabled(disabledMap.get("cancel"));
    if (addCancel)
        components.push(btn);
    let row = new discord_js_1.ActionRowBuilder().addComponents(components);
    return row;
}
exports.getPagesRow = getPagesRow;
//# sourceMappingURL=interactions.js.map