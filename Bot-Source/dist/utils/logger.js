"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const node_util_1 = require("node:util");
const fs_1 = __importDefault(require("fs"));
const node_zlib_1 = require("node:zlib");
const picocolors_1 = __importDefault(require("picocolors"));
class logger {
    constructor() {
        this.appName = "Music Boat";
        this.appColour = picocolors_1.default.bgMagenta;
        this.appFromColour = picocolors_1.default.bgMagentaBright;
        this.timeColour = picocolors_1.default.cyan;
        this.textColour = picocolors_1.default.whiteBright;
        this.textErrorColour = picocolors_1.default.redBright;
        this.cleanedUp = false;
        this.boundCleanup = this.cleanup.bind(this);
        if (!fs_1.default.existsSync("./logs"))
            fs_1.default.mkdirSync("./logs");
        process.on("exit", this.boundCleanup);
        process.on("beforeExit", this.boundCleanup);
        process.on("SIGINT", this.boundCleanup);
        process.on("SIGTERM", this.boundCleanup);
    }
    cleanup(code) {
        this.log("Cleanup with code " + code);
        if (this.cleanedUp)
            return;
        this.cleanedUp = true;
        process.off("exit", this.boundCleanup);
        process.off("beforeExit", this.boundCleanup);
        process.off("SIGINT", this.boundCleanup);
        process.off("SIGTERM", this.boundCleanup);
        let logFiles = fs_1.default.readdirSync("./logs");
        if (logFiles.length == 0)
            return;
        logFiles.forEach(file => {
            if (!file.endsWith(".gz")) {
                let contents = fs_1.default.readFileSync("./logs/" + file);
                let newfilename = file;
                let i = 1;
                while (fs_1.default.existsSync(`./logs/${newfilename}` + ".gz")) {
                    newfilename = file + `${i}`;
                    i++;
                }
                let data = (0, node_zlib_1.gzipSync)(contents);
                fs_1.default.writeFileSync(`./logs/${newfilename}.gz`, data);
                fs_1.default.rmSync("./logs/" + file);
            }
        });
        this.log("Cleaned up");
    }
    getTimeStr() {
        let date = new Date();
        return `${date.getHours().toLocaleString("en-GB", { minimumIntegerDigits: 2 })}:${date.getMinutes().toLocaleString("en-GB", { minimumIntegerDigits: 2 })}:${date.getSeconds().toLocaleString("en-GB", { minimumIntegerDigits: 2 })}`;
    }
    log(msg) {
        console.log(`[${this.timeColour(this.getTimeStr())}][${this.appColour(this.appName)}]: ${this.textColour(msg)}`);
        this.logToFile(msg, "stdout");
    }
    logFrom(msg, from) {
        console.log(`[${this.timeColour(this.getTimeStr())}][${this.appFromColour(from)}]: ${this.textColour(msg)}`);
        this.logToFile(`[${from}]: ${msg}`, "stdout");
    }
    error(msg) {
        console.error(`[${this.timeColour(this.getTimeStr())}][${this.appColour(this.appName)}]: ${this.textErrorColour(msg)}`);
        this.logToFile(msg, "stderr");
    }
    logToFile(msg, filename) {
        let toWrite = `[${this.getTimeStr()}][INFO]: ${msg}\n`;
        if (filename != "stdout" && filename != "stderr")
            this.logFrom(msg, filename);
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let filenamestr = `${day}-${month}-${year}--${filename}`;
        fs_1.default.appendFile(`./logs/${filenamestr}.log`, toWrite, "utf8", () => { });
    }
    async logToHaste(msg, test) {
        if (typeof (msg) == "object" && !test) {
            msg = (0, node_util_1.inspect)(msg);
        }
        const response = await fetch("https://haste.pixelator.xyz/documents", { method: "POST", body: msg });
        let data = await response.json();
        return `https://haste.pixelator.xyz/${data.key}`;
    }
}
exports.logger = logger;
//# sourceMappingURL=logger.js.map