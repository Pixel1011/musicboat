/* eslint-disable no-console */
import fetch from "node-fetch";
import type { musicBot } from "../client";
export class logger {
  client: musicBot;
  constructor(client: musicBot) {
    this.client = client;
  }

  log(msg: string) {
    let date = new Date();
    console.log(`[${date.getHours().toLocaleString("en-GB", {minimumIntegerDigits: 2})}:${date.getMinutes().toLocaleString("en-GB", {minimumIntegerDigits: 2})}][${this.client.user.username}]: ${msg}`);   
  }
  
  logFrom(msg: string, from: string) {
    let date = new Date();
    console.log(`[${date.getHours().toLocaleString("en-GB", {minimumIntegerDigits: 2})}:${date.getMinutes().toLocaleString("en-GB", {minimumIntegerDigits: 2})}][${this.client.user.username}][${from}]: ${msg}`);   
  }
  
  async logToHaste(msg: string, test?: boolean) {
    if (!test) test = false;
    if (typeof (msg) == "object" && !test) {
      msg = require("util").inspect(msg);
    } 
    const response = await fetch("https://haste.pixelator.xyz/documents", {method: "POST", body: msg});
    let data = await response.json();
    return `https://haste.pixelator.xyz/${data.key}`;
  }

};