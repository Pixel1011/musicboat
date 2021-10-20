let config = require("./config.json");
let musicbot = require("./client.js");
let numOfBots = config.tokens.length;
let i = 0;

// add some checks for empty config too
while (i != numOfBots) {
  new musicbot(config.tokens[i], config.prefixes[i], i);
  i++;
}