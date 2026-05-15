import { createBotCommand } from '@twurple/easy-bot';

export default createBotCommand(
  'oi',
  (params, { reply }) => {
    reply(`Olá!!`);
  },
  {
    aliases: ['hello', 'olá', 'ola', 'opa'],
    ignoreCase: true,
  },
);
