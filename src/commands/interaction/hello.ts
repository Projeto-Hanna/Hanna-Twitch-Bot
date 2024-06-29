import { createBotCommand } from '@twurple/easy-bot';

export default createBotCommand('oi', (params, { userName, say }) => {
	say(`@${userName} olá!!`);
});