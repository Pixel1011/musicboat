import type { musicBot } from "../client";
import BaouCmd from "../commands/baou";

export default async function (client: musicBot) {
  client.logger.log("Ready!");
  //new BaouCmd().timer(client);
}