import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";


export function getPagesRow(disabledMap: Map<string, boolean>, addCancel: boolean = true) {
  const components = [
    new ButtonBuilder().setEmoji("◀️").setStyle(ButtonStyle.Primary).setCustomId("left").setDisabled(disabledMap.get("left")),
    new ButtonBuilder().setEmoji("▶️").setStyle(ButtonStyle.Primary).setCustomId("right").setDisabled(disabledMap.get("right")),
  ];
  let btn = new ButtonBuilder().setLabel("Cancel").setStyle(ButtonStyle.Danger).setCustomId("cancel").setDisabled(disabledMap.get("cancel"));
  if (addCancel) components.push(btn);

  let row = new ActionRowBuilder().addComponents(components);
  return row;
}