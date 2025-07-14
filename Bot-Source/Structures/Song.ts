import type { TrackHash } from "@lavaclient/types/rest";
import type { User } from "discord.js";
import type { Player, Node } from "lavaclient";
import type { Queue } from "../utils/queue";

export interface QueueSong {
  encoded: TrackHash;
  identifier: string;
  seekable: boolean;
  length: number;
  isStream: boolean;
  title: string;
  url: string;
  channel: string
  thumbnail: string;
  requester: User
}

export interface InactiveStriker {
  guild: string;
  strikes: number;
  interval: NodeJS.Timeout;
}

// bplayer = boatplayer 
export interface BPlayer<T extends Node = Node> extends Player<T> {
  loop?: boolean;
  queueLoop?: boolean;
  queue?: Queue;
  skips?: Array<string>;
  eventsCreated?: boolean;
  striker?: InactiveStriker;
  boundChannel?: string;
  shuffle?: boolean;
}