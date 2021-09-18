/* eslint-disable no-console */
module.exports = class logger {
  constructor(client) {
    this.client = client;
  }
  log(msg) {
    let date = new Date();
    console.log(`[${date.getHours()}:${date.getMinutes()}][${this.client.user.username}]: ${msg}`);   
  }
  logFrom(msg, from) {
    let date = new Date();
    console.log(`[${date.getHours()}:${date.getMinutes()}][${from}]: ${msg}`);   
  }

};