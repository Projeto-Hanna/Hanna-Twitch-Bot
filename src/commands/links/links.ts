import { createBotCommand } from '@twurple/easy-bot';

export default createBotCommand(
  'links',
  (params, { reply }) => {
    reply(
      `Visite os links do Projeto Hanna agora mesmo 👉👉 https://linktr.ee/Projeto_Hanna`,
    );
  },
  {
    aliases: ['redes', 'linktree'],
    ignoreCase: true,
  },
);
