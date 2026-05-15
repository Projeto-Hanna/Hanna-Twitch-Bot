import { createBotCommand } from '@twurple/easy-bot';
import { drawUsers } from '../../shared/draw.js';

export default createBotCommand(
  'sorteio',
  (params, { userName, userId, reply }) => {
    const user = drawUsers[userId];

    if (!user) {
      drawUsers[userId] = {
        userName,
      };
    }

    reply(`Agora você está participando do sorteio!!`);
  },
  {
    ignoreCase: true,
  },
);
