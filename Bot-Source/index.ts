import * as config from "./config.json";
import { musicBot } from "./client";
import minimist from "minimist";
import { LavalinkUpdater } from "./updateLavaLink";


// how to start
// node index.js --bot (1/2/3, etc, however many tokens and prefixes you have in config.json)

async function main() {
  
  let i = 0;
  let args = minimist(process.argv.slice(2));
  let botnum: number;
  let updater = new LavalinkUpdater();
  
  if (args.bot) {
    botnum = args.bot - 1 + i;
  } else {
    botnum = i;
  }

  if (botnum == 0) {
    await updater.dostuff();
  }

  // add some checks for empty config too

  new musicBot(config.tokens[botnum], config.prefixes[botnum], botnum, updater);
}

main();