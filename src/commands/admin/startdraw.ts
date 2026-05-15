import { createBotCommand } from '@twurple/easy-bot';
import { drawUsers } from '../../shared/draw.js';
import { checkOwnerPermission } from '../../middlewares/index.js';

export default createBotCommand(
  'sortear',
  (params, { userName, say, reply }) => {
    if (!checkOwnerPermission(userName)) {
      return;
    }

    const userIds = Object.keys(drawUsers);

    if (!userIds.length) {
      reply(`Ainda não há usuários prontos para o sorteio!!`);
      return;
    }

    const randomIndex = Math.floor(Math.random() * userIds.length);
    const selectedUserId = userIds[randomIndex];
    const selectedUser = drawUsers[selectedUserId];

    say(`O usuário sorteado é @${selectedUser.userName}!!`);

    console.log(`Limpando ${userIds.length} usuários da lista de sorteio`);
    userIds.forEach(key => delete drawUsers[key]);
  },
  {
    aliases: ['startDraw'],
    ignoreCase: true,
  },
);
