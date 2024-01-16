import { ChatUserstate, Client } from 'tmi.js';

export type TwitchArgs = {
  tags: ChatUserstate;
  message: string;
  channel: string;
};

export type Command = {
  name: string;
  localizedNames?: string[];
  execute: (client: Client, args: TwitchArgs) => boolean;
};
