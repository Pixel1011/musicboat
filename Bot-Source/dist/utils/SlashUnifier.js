"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnifiedData = void 0;
class UnifiedData {
    constructor(client, msg, inter) {
        this.isMsg = false;
        this.client = client;
        this.inter = inter;
        this.msg = msg;
        if (msg != null) {
            this.author = msg.author;
            this.guild = msg.guild;
            this.channel = msg.channel;
            this.member = msg.member;
            this.createdTimestamp = msg.createdTimestamp;
            this.args = msg.content.split(" ");
            this.isMsg = true;
        }
        else if (inter != null) {
            this.author = inter.user;
            this.guild = inter.guild;
            this.channel = inter.channel;
            this.member = inter.member;
            this.createdTimestamp = inter.createdTimestamp;
            this.args = [];
            for (let i = 0; i < inter.options.data.length; i++) {
                this.args.push(inter.options.data[i].value.toString());
            }
        }
    }
    async send(content) {
        if (this.isMsg) {
            return await this.msg.channel.send(content);
        }
        else {
            this.replied = true;
            if (typeof content == "string") {
                return await this.inter.followUp({ content: content, fetchReply: true });
            }
            else {
                let interContent = content;
                interContent.withResponse = true;
                return await this.inter.followUp(interContent);
            }
        }
    }
}
exports.UnifiedData = UnifiedData;
//# sourceMappingURL=SlashUnifier.js.map