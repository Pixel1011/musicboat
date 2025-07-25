"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArgOption = exports.ArgType = exports.Command = void 0;
class Command {
    async run(client, data, args) { }
}
exports.Command = Command;
var ArgType;
(function (ArgType) {
    ArgType["ATTACHMENT"] = "attachment";
    ArgType["BOOLEAN"] = "boolean";
    ArgType["CHANNEL"] = "channel";
    ArgType["INTEGER"] = "integer";
    ArgType["MENTIONABLE"] = "mentionable";
    ArgType["NUMBER"] = "number";
    ArgType["ROLE"] = "role";
    ArgType["STRING"] = "string";
    ArgType["USER"] = "user";
})(ArgType || (exports.ArgType = ArgType = {}));
class ArgOption {
    constructor(name, description, required, type, extras = null) {
        this.name = name;
        this.description = description;
        this.required = required;
        this.type = type;
        this.extras = extras;
    }
}
exports.ArgOption = ArgOption;
//# sourceMappingURL=Command.js.map