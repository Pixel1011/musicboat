"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sleep(ms) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < ms);
}
class lavaError {
    constructor(client) {
        this.errorNum = 0;
        this.client = client;
    }
    async handle(error) {
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
exports.default = lavaError;
//# sourceMappingURL=lavaError.js.map