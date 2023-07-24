"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config = __importStar(require("./config.json"));
const client_1 = require("./client");
const minimist_1 = __importDefault(require("minimist"));
const updateLavaLink_1 = require("./updateLavaLink");
async function main() {
    let i = 0;
    let args = (0, minimist_1.default)(process.argv.slice(2));
    let botnum;
    let updater = new updateLavaLink_1.LavalinkUpdater();
    if (args.bot) {
        botnum = args.bot - 1 + i;
    }
    else {
        botnum = i;
    }
    if (botnum == 0) {
        await updater.dostuff();
    }
    new client_1.musicBot(config.tokens[botnum], config.prefixes[botnum], botnum, updater);
}
main();
//# sourceMappingURL=index.js.map