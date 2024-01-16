import { Client } from 'tmi.js';

import { Command, TwitchArgs } from '../../types';

const execute = (client: Client, args: TwitchArgs) => {
	client.say(args.channel, `@${args.tags.username} olá!!`);
  return true;
};

export default {
	name: 'hello',
	localizedNames: ['oi', 'olá'],
	execute,
} as Command;