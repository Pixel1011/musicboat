import type { musicBot } from "../client";

export default async function (client: musicBot) {
  client.logger.logFrom("Connected", "Lavalink");
}