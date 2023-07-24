"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LavalinkUpdater = void 0;
const child_process_1 = require("child_process");
const node_events_1 = require("node:events");
const node_fetch_1 = __importDefault(require("node-fetch"));
const fs_1 = __importDefault(require("fs"));
const promises_1 = require("fs/promises");
let url = "https://github.com/lavalink-devs/Lavalink/releases/latest/download/Lavalink.jar";
let apiurl = "https://api.github.com/repos/lavalink-devs/Lavalink/releases/latest";
class LavalinkUpdater extends node_events_1.EventEmitter {
    super() {
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
    async dostuff() {
        let isUptoDate = await this.checkVersion();
        if (!isUptoDate) {
            await this.updateLavaLink();
        }
        await this.startLavaLink();
    }
}
exports.LavalinkUpdater = LavalinkUpdater;
//# sourceMappingURL=updateLavaLink.js.map