let config = require("./config.json");
let musicbot = require("./client.js");
let i = 0;
let args = require("minimist")(process.argv.slice(2));
let botnum;

if (args.bot) {
  botnum = args.bot - 1 + i;
} else {
  botnum = i;
}

// add some checks for empty config too

new musicbot(config.tokens[botnum], config.prefixes[botnum], botnum);