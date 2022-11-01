/* eslint-disable no-unused-vars */
import type { Message } from "discord.js";
import type { musicBot } from "../client";

export class command {
  data: {
    name: string;
    description: string;
    aliases: string[];
    hide: boolean;
    alias?: boolean;
    run: (client: musicBot, msg: Message, args?: string[]) => Promise<void>;
  };
}