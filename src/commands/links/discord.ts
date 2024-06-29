import { createBotCommand } from '@twurple/easy-bot';

export default createBotCommand('discord', (params, { userName, say }) => {
	say(`@${userName} entra lá no nosso servidor do Discord: ${process.env.DISCORD_LINK}`);
});