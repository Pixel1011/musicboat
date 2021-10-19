let config = require("./config.json");
let musicbot = require("./client.js");
let numOfBots = config.tokens.length;
let i = 0;

String.prototype.replaceAt = function (index, replacement) { // hopefully doing this isnt a mistake
  if (!index || !replacement) return this;
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
};

// add some checks for empty config too
while (i != numOfBots) {
  new musicbot(config.tokens[i], config.prefixes[i], i);
  i++;
}