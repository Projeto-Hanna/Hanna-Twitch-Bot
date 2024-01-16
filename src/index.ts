import 'dotenv/config';

import tmi from 'tmi.js';

import { messageStartsWithPrefix, parseCommand } from './utils/commands';

const client = new tmi.Client({
  options: { debug: true },
  connection: {
    secure: true,
    reconnect: true
  },
  identity: {
    username: process.env.TWITCH_USERNAME,
    password: process.env.TWITCH_OAUTH_TOKEN
  },
  channels: [
    String(process.env.TWITCH_CHANNEL),
  ]
});

client.connect();

client.on('message', async (channel, tags, message, self) => {
  if(self || !messageStartsWithPrefix(message)) {
    return;
  }

  const command = parseCommand(message);

  if (!command) {
    return;
  }

  try {
    command.execute(client, {
      tags,
      channel,
      message,
    });
  } catch (error) {
    console.error(error);
  }
});