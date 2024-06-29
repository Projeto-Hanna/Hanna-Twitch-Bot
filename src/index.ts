import 'dotenv/config';

import { RefreshingAuthProvider } from '@twurple/auth';
import { Bot } from '@twurple/easy-bot';
import { promises as fs } from 'fs';

import commands from './commands/index.js';

const twitchChannel = String(process.env.TWITCH_CHANNEL);
const clientId = String(process.env.TWITCH_CLIENT_ID);
const clientSecret = String(process.env.TWITCH_CLIENT_SECRET);
const authProvider = new RefreshingAuthProvider({ clientId, clientSecret });

const tokenData = JSON.parse(await fs.readFile(`./twitch-auth-tokens.json`, 'utf-8'));
await authProvider.addUserForToken(tokenData, ['chat']);

authProvider.onRefresh(
  async (_userId, newTokenData) => await fs.writeFile(`./twitch-auth-tokens.json`, JSON.stringify(newTokenData, null, 4), 'utf-8'),
);

const bot = new Bot({
	authProvider,
	channels: [twitchChannel],
  prefix: process.env.PREFIX,
	commands: [...commands]
});

bot.onAuthenticationSuccess(() => {
  console.log('Bot online');
  bot.say(twitchChannel, 'Olá mundo!!');
});

bot.onAuthenticationFailure(() => {
  console.log('Falha na autenticação');
});

bot.onSub(({ broadcasterName, userName }) => {
	bot.say(broadcasterName, `Obrigada @${userName} pelo sub!!`);
});

bot.onResub(({ broadcasterName, userName, months }) => {
	bot.say(broadcasterName, `Obrigada @${userName} por ${months} mês/meses de sub!!`);
});

bot.onSubGift(({ broadcasterName, gifterName, userName }) => {
	bot.say(broadcasterName, `Obrigada @${gifterName} por dar um sub para @${userName}!!`);
});