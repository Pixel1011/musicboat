/* eslint-disable no-unused-vars */
import { ApplicationCommandOptionAllowedChannelTypes, ChannelType, Message } from "discord.js";
import type { musicBot } from "../client";
import type { UnifiedData } from "../utils/SlashUnifier";

export class Command {
  name: string;
  description: string;
  aliases: string[];
  hide: boolean;
  alias?: boolean;
  arguments?: ArgOption[];
  async run(client: musicBot, data: UnifiedData, args: string[]): Promise<void | Message<boolean>> {}
}


export enum ArgType {
  ATTACHMENT = "attachment",
  BOOLEAN = "boolean",
  CHANNEL = "channel",
  INTEGER = "integer",
  MENTIONABLE = "mentionable",
  NUMBER = "number",
  ROLE = "role",
  STRING = "string",
  USER = "user"
}

type ArgExtras = {
  [ArgType.ATTACHMENT]: null;
  [ArgType.BOOLEAN]: null;
  [ArgType.CHANNEL]: { channelTypes?: ApplicationCommandOptionAllowedChannelTypes[] } | null;
  [ArgType.INTEGER]: { choices?: number[]; minValue?: number; maxValue?: number, autocomplete?: boolean } | null;
  [ArgType.MENTIONABLE]: null;
  [ArgType.NUMBER]: { choices?: number[]; minValue?: number; maxValue?: number, autocomplete?: boolean } | null;
  [ArgType.ROLE]: null;
  [ArgType.STRING]: { choices?: string[]; minLength?: number; maxLength?: number, autocomplete?: boolean } | null;
  [ArgType.USER]: null;
};

export class ArgOption<T extends ArgType = ArgType> {
  name: string;
  description: string;
  required: boolean;
  type: T;
  extras?: ArgExtras[T];
  
  constructor(name: string, description: string, required: boolean, type: T, extras: ArgExtras[T] = null) {
    this.name = name;
    this.description = description;
    this.required = required;
    this.type = type;
    this.extras = extras;
  }

}