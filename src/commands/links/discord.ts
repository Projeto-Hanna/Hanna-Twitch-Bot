import { Client } from 'tmi.js';

import { Command, TwitchArgs } from '../../types';

const execute = (client: Client, args: TwitchArgs) => {
	client.say(args.channel, `Entrem no nosso servidor do Discord: ${process.env.DISCORD_LINK}`);
  return true;
};

export default {
	name: 'discord',
	execute,
} as Command;