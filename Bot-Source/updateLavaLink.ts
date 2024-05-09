// Updates lavalink jar to latest version

import { spawn, exec } from "child_process";
import { EventEmitter } from "node:events";
import fetch from "node-fetch";
import fs from "fs";
import {unlink} from "fs/promises";
import type { ChildProcess } from "child_process";

let url = "https://github.com/lavalink-devs/Lavalink/releases/latest/download/Lavalink.jar";
let apiurl = "https://api.github.com/repos/lavalink-devs/Lavalink/releases/latest";

// stop updating if true
const brick = true;

// would also update lavasrc automatically but is less easy as the file names have the version in them
// i mean it makes checking version easier but downloading the correct version harder

export class LavalinkUpdater extends EventEmitter {
  child: ChildProcess;
  
  super() {
  }

  async download(url: string, outputPath: any) {
    let fetched = await fetch(url);
    let bytes = await fetched.buffer();
    return fs.writeFileSync(outputPath, bytes);
  }
  
  async updateLavaLink() {
    try {
      await unlink("Lavalink.jar");
    } catch (e) {
      // bleh
    }

    await this.download(url, "Lavalink.jar");
  }
  
  startLavaLink() {
    this.child = spawn("java", ["-jar", "Lavalink.jar"], {
      stdio: "inherit",
    });
  
    this.child.on("close", (code) => {
      console.log(`Lavalink exited with code ${code}. Restarting...`);
      // emit event 
      this.startLavaLink();
      this.emit("close");
    });
  
    process.on("exit", () => {
      this.child.kill();
    });
  }

  async checkVersion() {
    // unzips the jar and checks the version
    // cd to ./JarDecomp and use jar xvf to extract
    // returns true if the version is the latest version
    
    // check if file exists
    if (!fs.existsSync("./JarDecomp")) {
      fs.mkdirSync("./JarDecomp");
    }
    if (!fs.existsSync("./Lavalink.jar")) {
      return false;
    }
    await new Promise<void>((resolve, reject) => {
      exec("cd ./JarDecomp && jar xvf ../Lavalink.jar", (err) => {
        if (err) {
          console.log("Failed to unzip jar");
          console.log(err.message);
          reject();
        }
      }).once("exit", () => {
        resolve();
      });
    });

    let file = fs.readFileSync("./JarDecomp/BOOT-INF/classes/app.properties", "utf-8");
    let localVersion = file.split("\n")[0].split("=")[1];
    if (localVersion == "") {
      console.log("uh oh i guess they moved the version indicator it (report please)");
      return false;
    }
    let latestVersion = (await (await fetch(apiurl)).json()).tag_name;

    if (localVersion == latestVersion) {
      return true;
    } else {
      return false;
    }

  }
  
  async dostuff() {
    if (!brick) {
      let isUptoDate = await this.checkVersion();
      if (!isUptoDate) {
        await this.updateLavaLink();
      }
    }
    await this.startLavaLink();
  }
}