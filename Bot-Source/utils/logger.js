/* eslint-disable no-console */
const fetch = require("node-fetch");
module.exports = class logger {
  constructor(client) {
    this.client = client;
  }
  log(msg) {
    let date = new Date();
    console.log(`[${date.getHours().toLocaleString("en-GB", {minimumIntegerDigits: 2})}:${date.getMinutes().toLocaleString("en-GB", {minimumIntegerDigits: 2})}][${this.client.user.username}]: ${msg}`);   
  }
  logFrom(msg, from) {
    let date = new Date();
    console.log(`[${date.getHours().toLocaleString("en-GB", {minimumIntegerDigits: 2})}:${date.getMinutes().toLocaleString("en-GB", {minimumIntegerDigits: 2})}][${from}]: ${msg}`);   
  }
  
  async logToHaste(msg, test) {
    if(!test) test = false;
    if (typeof(msg) == "object" && !test) {
      msg = require("util").inspect(msg);
    } 
    const response = await fetch("https://haste.pixelator.xyz/documents", {method: "POST", body: msg});
    let data = await response.json();
    return `https://haste.pixelator.xyz/${data.key}`;
  }

};