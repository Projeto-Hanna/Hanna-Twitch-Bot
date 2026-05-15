import { createBotCommand } from '@twurple/easy-bot';

export default createBotCommand(
  'discord',
  (params, { reply }) => {
    reply(`Entra lá no nosso servidor do Discord: ${process.env.DISCORD_LINK}`);
  },
  {
    aliases: ['disc'],
    ignoreCase: true,
  },
);
