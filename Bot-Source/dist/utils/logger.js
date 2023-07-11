"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
class logger {
    constructor(client) {
        this.client = client;
    }
    log(msg) {
        let date = new Date();
        console.log(`[${date.getHours().toLocaleString("en-GB", { minimumIntegerDigits: 2 })}:${date.getMinutes().toLocaleString("en-GB", { minimumIntegerDigits: 2 })}][${this.client.user.username}]: ${msg}`);
    }
    logFrom(msg, from) {
        let date = new Date();
        console.log(`[${date.getHours().toLocaleString("en-GB", { minimumIntegerDigits: 2 })}:${date.getMinutes().toLocaleString("en-GB", { minimumIntegerDigits: 2 })}][${this.client.user.username}][${from}]: ${msg}`);
    }
    async logToHaste(msg, test) {
        if (!test)
            test = false;
        if (typeof (msg) == "object" && !test) {
            msg = require("util").inspect(msg);
        }
        const response = await (0, node_fetch_1.default)("https://haste.pixelator.xyz/documents", { method: "POST", body: msg });
        let data = await response.json();
        return `https://haste.pixelator.xyz/${data.key}`;
    }
}
exports.logger = logger;
//# sourceMappingURL=logger.js.map