import type { musicBot } from "../client";

function sleep(ms: number) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < ms);
}

export default class lavaEvents {
  client: musicBot;
  connectedOnce = false;
  errorNum: number = 0;
  constructor(client: musicBot) {
    this.client = client;
  }

  async handleError(error: Error) {
    this.client.logger.logFrom(error.message, "Lavalink Error");
    if (error.message.includes("ECONNREFUSED")) {

      if (this.errorNum > 50) {
        throw "Unable to connect to the lavalink Server";
      }
      this.client.logger.logFrom("Lavalink connection refused, attempting to reconnect", "Lavalink");
      this.client.lavalink.connect({userId: this.client.user.id, force: true});
      this.errorNum += 1;
      sleep(2000);
    }
  }

  async handleDisconnect() {
    //this.client.lavalink.connect({userId: this.client.user.id});
    // ok this ends up causing some weird forcing alot of connections so.. i guess i leave it?
  }

  async handleConnect() {
    this.client.logger.logFrom("Connected", "Lavalink");
    if (!this.connectedOnce) {
      this.client.logger.log("Reloading players...");
      setTimeout(() => {
        this.client.reloadPlayers();
      }, 5000);
      this.connectedOnce = true;
    }
  }
}
