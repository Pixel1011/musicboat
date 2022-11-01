import type { musicBot } from "../client";

export default async function (error, client:musicBot) {
  client.logger.logFrom(error, "LAVAERROR");
}