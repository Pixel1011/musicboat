import type { GuildMember } from "discord.js";
import type { musicBot } from "../client";

enum users {
  "lilly" = "513060993341980672",
  "ryan" = "872268074668142672",
  "ewan" = "588029104838934528",
  "emily" = "1086364646233083964",
  "skull" = "264085296017047554",
  "elon" = "276851121283268609",
  "deep" = "366273857402699781",
  "dhaval" = "593472565238824990",
  "prem" = "743870872858787901",
  "dea" = "1167069721162686528",

  "sadgie" = "454051934177984524",
  "davgel" = "360491720988688385",
  "fran" = "842709464200380436",
  "woahsnake" = "250392880823140352",
  "zaktusii" = "435790436108337152",

  "charlie" = "716308986089046079",
  // dunno who tf would invite her but may as well
  //"diya" = "502622268392996865",
}

const userIdtoRole: Record<string, string> = {
  [users.lilly]: "1480413847692251197",
  [users.ryan]: "1480413732713529474",
  [users.ewan]: "1480413919947395115",
  [users.emily]: "1480413934069747792",
  [users.skull]: "1480413966692777984",
  [users.elon]: "1480414002872979507",
  [users.deep]: "1480414055679135926",
  [users.dhaval]: "1480414096615800872",
  [users.prem]: "1480414130933334136",
  [users.dea]: "1480420783447605384",
}

enum roles {
  "aou" = "1468383780585603404"
}

export default async (member: GuildMember, client: musicBot) => {
  if (member.guild.id != "1468374615754543179") return;
  
  let allowedUsers = Object.values(users) as string[];

  if (allowedUsers.includes(member.id)) {
    await member.roles.add(roles.aou);
  } else {
    // idk to kick or not, i already sectioned off everything except general
  }

  if (userIdtoRole[member.id]) {
    await member.roles.add(userIdtoRole[member.id]);
  }


};