/* eslint-disable no-unused-vars */
import { Message } from "discord.js";
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

export class ArgOption {
  name: string;
  description: string;
  required: boolean;
  type: ArgType;

  constructor(name: string, description: string, required: boolean, type: ArgType) {
    this.name = name;
    this.description = description;
    this.required = required;
    this.type = type;
  }

}