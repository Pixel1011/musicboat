/* eslint-disable no-unused-vars */
import type { musicBot } from "../client";
import type { UnifiedData } from "../utils/SlashUnifier";

export interface Command {
  data: {
    name: string;
    description: string;
    aliases: string[];
    hide: boolean;
    alias?: boolean;
    arguments?: ArgOption[];
    run: (client: musicBot, data: UnifiedData, args: string[]) => Promise<void>;
  };
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