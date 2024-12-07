import { createBotCommand } from '@twurple/easy-bot';

export default createBotCommand('instagram', (params, { userName, say }) => {
	say(`@${userName} veja nossos posts, reels e stories em: ${process.env.INSTAGRAM_LINK}`);
});