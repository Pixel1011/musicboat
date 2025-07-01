"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LavalinkUpdater = void 0;
const child_process_1 = require("child_process");
const node_events_1 = __importDefault(require("node:events"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const fs_1 = __importDefault(require("fs"));
const promises_1 = require("fs/promises");
let url = "https://github.com/lavalink-devs/Lavalink/releases/latest/download/Lavalink.jar";
let apiurl = "https://api.github.com/repos/lavalink-devs/Lavalink/releases/latest";
let lavasrc_url = "https://github.com/topi314/LavaSrc/releases/latest/download/";
let lavasrc_api = "https://api.github.com/repos/topi314/LavaSrc/releases/latest";
let youtube_url = "https://github.com/lavalink-devs/youtube-source/releases/latest/download/";
let youtube_api = "https://api.github.com/repos/lavalink-devs/youtube-source/releases/latest";
const brick = false;
class LavalinkUpdater extends node_events_1.default {
    constructor() {
        super();
    }
    async download(url, outputPath) {
        let fetched = await (0, node_fetch_1.default)(url);
        let bytes = await fetched.buffer();
        return fs_1.default.writeFileSync(outputPath, bytes);
    }
    async updateLavaLink() {
        try {
            await (0, promises_1.unlink)("Lavalink.jar");
        }
        catch (e) {
        }
        await this.download(url, "Lavalink.jar");
    }
    startLavaLink() {
        this.child = (0, child_process_1.spawn)("java", ["-jar", "Lavalink.jar"], {
            stdio: "inherit",
        });
        this.child.on("close", (code) => {
            console.log(`Lavalink exited with code ${code}. Restarting...`);
            this.startLavaLink();
            this.emit("close");
        });
        process.on("exit", () => {
            this.child.kill();
        });
    }
    async checkVersion() {
        if (!fs_1.default.existsSync("./JarDecomp")) {
            fs_1.default.mkdirSync("./JarDecomp");
        }
        if (!fs_1.default.existsSync("./Lavalink.jar")) {
            return false;
        }
        await new Promise((resolve, reject) => {
            (0, child_process_1.exec)("cd ./JarDecomp && jar xvf ../Lavalink.jar", (err) => {
                if (err) {
                    console.log("Failed to unzip jar");
                    console.log(err.message);
                    reject();
                }
            }).once("exit", () => {
                resolve();
            });
        });
        let file = fs_1.default.readFileSync("./JarDecomp/BOOT-INF/classes/app.properties", "utf-8");
        let localVersion = file.split("\n")[0].split("=")[1];
        if (localVersion == "") {
            console.log("uh oh i guess they moved the version indicator it (report please)");
            return false;
        }
        let latestVersion = (await (await (0, node_fetch_1.default)(apiurl)).json()).tag_name;
        if (localVersion == latestVersion) {
            return true;
        }
        else {
            return false;
        }
    }
    async updatePlugins() {
        const dotregex = /\./g;
        let lavasrc = await (await (0, node_fetch_1.default)(lavasrc_api)).json();
        let youtube = await (await (0, node_fetch_1.default)(youtube_api, { headers: { Authorization: "" } })).json();
        let latest_lavasrc_version = Number(lavasrc.tag_name.replace(dotregex, ""));
        let latest_youtube_version = Number(youtube.tag_name.replace(dotregex, ""));
        let current_lavasrc_version = 0;
        let current_youtube_version = 0;
        if (!fs_1.default.existsSync("./plugins")) {
            fs_1.default.mkdirSync("./plugins");
        }
        let plugindir = fs_1.default.readdirSync("./plugins");
        for (let p of plugindir) {
            if (p.includes("lavasrc")) {
                current_lavasrc_version = Number(p.split("-")[2].replace(".jar", "").replace(dotregex, ""));
            }
            else if (p.includes("youtube")) {
                current_youtube_version = Number(p.split("-")[2].replace(".jar", "").replace(dotregex, ""));
            }
        }
        if (current_lavasrc_version < latest_lavasrc_version) {
            await this.download(lavasrc_url + `lavasrc-plugin-${lavasrc.tag_name}.jar`, `./plugins/lavasrc-plugin-${lavasrc.tag_name}.jar`);
        }
        if (current_youtube_version < latest_youtube_version) {
            await this.download(youtube_url + `youtube-plugin-${youtube.tag_name}.jar`, `./plugins/youtube-plugin-${youtube.tag_name}.jar`);
        }
        let application = fs_1.default.readFileSync("./application.yml", "utf-8");
        let lines = application.split("\n");
        let lavasrcline = lines.findIndex((line) => { return line.includes("com.github.topi314.lavasrc:"); });
        let youtubeline = lines.findIndex((line) => { return line.includes("dev.lavalink.youtube:"); });
        lines[lavasrcline] = `    - dependency: "com.github.topi314.lavasrc:lavasrc-plugin:${lavasrc.tag_name}"`;
        lines[youtubeline] = `    - dependency: "dev.lavalink.youtube:youtube-plugin:${youtube.tag_name}"`;
        fs_1.default.writeFileSync("./application.yml", lines.join("\n"));
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
exports.LavalinkUpdater = LavalinkUpdater;
//# sourceMappingURL=updateLavaLink.js.map