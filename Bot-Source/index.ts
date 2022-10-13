import * as config from "./config.json";
import { musicBot } from "./client";
import minimist from "minimist";
let i = 0;
let args = minimist(process.argv.slice(2));
let botnum: number;

if (args.bot) {
  botnum = args.bot - 1 + i;
} else {
  botnum = i;
}

// add some checks for empty config too

new musicBot(config.tokens[botnum], config.prefixes[botnum], botnum);