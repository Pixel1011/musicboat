import type { BaseMessageOptionsWithPoll, ChatInputCommandInteraction, EmbedBuilder, Guild, GuildMember, InteractionReplyOptions, Message, TextChannel, User } from "discord.js";
import type { musicBot } from "../client";

export class UnifiedData {
  client: musicBot;
  author: User;
  guild: Guild;
  channel: TextChannel;
  member: GuildMember;
  createdTimestamp: number;
  args: string[];

  replied: boolean;

  // internal vars
  private inter: ChatInputCommandInteraction;
  private msg: Message;
  private isMsg: boolean = false;

  constructor(client: musicBot, msg?: Message, inter?: ChatInputCommandInteraction) {
    this.client = client;
    this.inter = inter;
    this.msg = msg;
    if (msg != null) { 
      // if message
      this.author = msg.author;
      this.guild = msg.guild;
      this.channel = msg.channel as TextChannel;
      this.member = msg.member;
      this.createdTimestamp = msg.createdTimestamp;
      this.args = msg.content.split(" ");

      this.isMsg = true;
    } else if (inter != null) {
      // if is interaction
      this.author = inter.user;
      this.guild = inter.guild;
      this.channel = inter.channel as TextChannel;
      this.member = inter.member as GuildMember;
      this.createdTimestamp = inter.createdTimestamp;
      // get args from interaction
      this.args = [];
      for (let i = 0; i < inter.options.data.length; i++) {
        this.args.push(inter.options.data[i].value.toString());
      }
    }
  }

  async send(content: string | BaseMessageOptionsWithPoll): Promise<Message<boolean>> {
    if (this.isMsg) {
      return await (this.msg.channel as TextChannel).send(content);
    } else {
      this.replied = true;
      if (typeof content == "string") {
        return await this.inter.followUp({ content: content, fetchReply: true });
      } else {
        let interContent = content as InteractionReplyOptions;
        interContent.withResponse = true;
        return await this.inter.followUp(interContent);
      }
    }
  }
}