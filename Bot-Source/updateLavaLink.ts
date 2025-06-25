/* eslint-disable no-unused-vars */
// Updates lavalink jar to latest version

import { spawn, exec } from "child_process";
import EventEmitter from "node:events";
import fetch from "node-fetch";
import fs from "fs";
import {unlink} from "fs/promises";
import { ChildProcess } from "child_process";

let url = "https://github.com/lavalink-devs/Lavalink/releases/latest/download/Lavalink.jar";
let apiurl = "https://api.github.com/repos/lavalink-devs/Lavalink/releases/latest";

let lavasrc_url = "https://github.com/topi314/LavaSrc/releases/latest/download/";
let lavasrc_api = "https://api.github.com/repos/topi314/LavaSrc/releases/latest";

let youtube_url = "https://github.com/lavalink-devs/youtube-source/releases/latest/download/";
let youtube_api = "https://api.github.com/repos/lavalink-devs/youtube-source/releases/latest";

// stop updating if true
const brick = false;

export class LavalinkUpdater extends EventEmitter {
  child: ChildProcess;
  
  constructor() {
    super();
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

  async updatePlugins() {
    // get latest version
    const dotregex = /\./g;
    let lavasrc = await (await fetch(lavasrc_api)).json();
    let youtube = await (await fetch(youtube_api)).json();

    let latest_lavasrc_version: Number = Number((lavasrc.tag_name as String).replace(dotregex, ""));
    let latest_youtube_version: Number = Number((youtube.tag_name as String).replace(dotregex, ""));

    // get current version
    let current_lavasrc_version: Number = 0;
    let current_youtube_version: Number = 0;
    if (!fs.existsSync("./plugins")) {
      fs.mkdirSync("./plugins");
    } 

    let plugindir = fs.readdirSync("./plugins");
    for (let p of plugindir) {
      if (p.includes("lavasrc")) {
        current_lavasrc_version = Number(p.split("-")[2].replace(".jar", "").replace(dotregex, ""));
      } else if (p.includes("youtube")) {
        current_youtube_version = Number(p.split("-")[2].replace(".jar", "").replace(dotregex, ""));
      }
    }
    // download if not latest
    if (current_lavasrc_version < latest_lavasrc_version) {
      await this.download(lavasrc_url + `lavasrc-plugin-${lavasrc.tag_name}.jar`, `./plugins/lavasrc-plugin-${lavasrc.tag_name}.jar`);
    }
    if (current_youtube_version < latest_youtube_version) {
      await this.download(youtube_url + `youtube-plugin-${youtube.tag_name}.jar`, `./plugins/youtube-plugin-${youtube.tag_name}.jar`);
    }

    // update application.yml
    let application = fs.readFileSync("./application.yml", "utf-8");
    let lines = application.split("\n");

    let lavasrcline = lines.findIndex((line) => { return line.includes("com.github.topi314.lavasrc:"); });
    let youtubeline = lines.findIndex((line) => { return line.includes("dev.lavalink.youtube:"); });

    lines[lavasrcline] = `    - dependency: "com.github.topi314.lavasrc:lavasrc-plugin:${lavasrc.tag_name}"`;
    lines[youtubeline] = `    - dependency: "dev.lavalink.youtube:youtube-plugin:${youtube.tag_name}"`;

    fs.writeFileSync("./application.yml", lines.join("\n"));

  }

  async dostuff() {
    if (!brick) {
      let isUptoDate = await this.checkVersion();
      if (!isUptoDate) {
        await this.updateLavaLink();
      }
      await this.updatePlugins();
    }
    await this.startLavaLink();
  }
}
