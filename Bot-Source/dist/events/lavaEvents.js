"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sleep(ms) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < ms);
}
class lavaEvents {
    constructor(client) {
        this.errorNum = 0;
        this.client = client;
    }
    async handleError(error) {
        this.client.logger.logFrom(error.message, "Lavalink");
        if (error.message.includes("ECONNREFUSED")) {
            if (this.errorNum > 5) {
                throw "Unable to connect to the lavalink Server";
            }
            this.client.logger.logFrom("Lavalink connection refused, attempting to reconnect", "Lavalink");
            this.client.lavalink.connect(this.client.user.id);
            this.errorNum += 1;
            sleep(2000);
        }
    }
    async handleDisconnect() {
    }
    async handleConnect() {
        this.client.logger.logFrom("Connected", "Lavalink");
    }
}
exports.default = lavaEvents;
//# sourceMappingURL=lavaEvents.js.map