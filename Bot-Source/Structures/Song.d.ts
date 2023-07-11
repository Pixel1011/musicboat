import type { TrackHash } from "@lavaclient/types/rest";
import type { User } from "discord.js";

export interface QueueSong {
  track: TrackHash;
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
  interval: NodeJS.Timer;
}