/* eslint-disable no-console */
import { inspect } from "node:util";
import type { musicBot } from "../client";
import fs from "fs";
import { gzipSync } from "node:zlib";
import pico from "picocolors";

export class logger {
  readonly appName = "Music Boat";
  readonly appColour = pico.magenta;
  readonly appFromColour = pico.magentaBright;

  readonly timeColour = pico.cyan;
  readonly textColour = pico.whiteBright;
  readonly textErrorColour = pico.redBright;

  cleanedUp: boolean = false;
  boundCleanup = this.cleanup.bind(this);
  constructor() {
    if (!fs.existsSync("./logs")) fs.mkdirSync("./logs");
    process.on("exit", this.boundCleanup);
    process.on("beforeExit", this.boundCleanup);
    process.on("SIGINT", this.boundCleanup);
    process.on("SIGTERM", this.boundCleanup);
  }

  private cleanup(code) {
    this.log("Cleanup with code " + code);
    if (this.cleanedUp) return;
    this.cleanedUp = true;
    
    process.off("exit", this.boundCleanup);
    process.off("beforeExit", this.boundCleanup);
    process.off("SIGINT", this.boundCleanup);
    process.off("SIGTERM", this.boundCleanup);
    let logFiles = fs.readdirSync("./logs");
    if (logFiles.length == 0) return;
    logFiles.forEach(file => {
      if(!file.endsWith(".gz")) {
        let contents = fs.readFileSync("./logs/" + file);
        let newfilename = file;
        let i = 1;
        while (fs.existsSync(`./logs/${newfilename}` + ".gz")) {
          newfilename = file + `${i}`;
          i++;
        }
        let data = gzipSync(contents);

        fs.writeFileSync(`./logs/${newfilename}.gz`, data);
        fs.rmSync("./logs/" + file);
      }
    });
    this.log("Cleaned up");
    //process.exit(0);
  }

  private getTimeStr() {
    let date = new Date();
    return `${date.getHours().toLocaleString("en-GB", {minimumIntegerDigits: 2})}:${date.getMinutes().toLocaleString("en-GB", {minimumIntegerDigits: 2})}:${date.getSeconds().toLocaleString("en-GB", {minimumIntegerDigits: 2})}`;
  }

  log(msg: string) {
    console.log(`[${this.timeColour(this.getTimeStr())}][${this.appColour(this.appName)}]: ${this.textColour(msg)}`);
    this.logToFile(msg, "stdout");
  }
  
  logFrom(msg: string, from: string) {
    console.log(`[${this.timeColour(this.getTimeStr())}][${this.appFromColour(from)}]: ${this.textColour(msg)}`);   
    this.logToFile(`[${from}]: ${msg}`, "stdout");
  }
  
  error(msg: string) {
    console.error(`[${this.timeColour(this.getTimeStr())}][${this.appColour(this.appName)}]: ${this.textErrorColour(msg)}`);
    this.logToFile(msg, "stderr");
  } 
    
  logToFile(msg: string, filename: string) {
    let toWrite = `[${this.getTimeStr()}][INFO]: ${msg}\n`;
    if (filename != "stdout" && filename != "stderr") this.logFrom(msg, filename);
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let filenamestr = `${day}-${month}-${year}--${filename}`;

    fs.appendFile(`./logs/${filenamestr}.log`, toWrite, "utf8", () => {});
  }

  async logToHaste(msg: object | string, test?: boolean) {
    if (typeof (msg) == "object" && !test) {
      msg = inspect(msg);
    } 
    const response = await fetch("https://haste.pixelator.xyz/documents", {method: "POST", body: msg as string});
    let data = await response.json() as hasteResponse;
    return `https://haste.pixelator.xyz/${data.key}`;
  }

}

interface hasteResponse {
  key: string
}