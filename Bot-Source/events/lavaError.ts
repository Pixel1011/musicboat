import type { musicBot } from "../client";

// stop all program execution to wait for lavalink to connect
function sleep(ms: number) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < ms);
}

export default class lavaError {
  client: musicBot;
  errorNum: number = 0;
  constructor(client: musicBot) {
    this.client = client;
  }

  async handle(error: Error) {
    this.client.logger.logFrom(error.message, "LAVAERROR");
    if (error.message.includes("ECONNREFUSED")) {

      if (this.errorNum > 5) {
        throw "Unable to connect to the lavalink Server";
      }
      this.client.logger.logFrom("Lavalink connection refused, attempting to reconnect", "LAVAERROR");
      this.client.lavalink.connect(this.client.user.id);
      this.errorNum += 1;
      sleep(2000);
    }
  }
}
