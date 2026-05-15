import { createBotCommand } from '@twurple/easy-bot';
import { HeadpatUsersDict } from '../../types/index.js';

const headpatUsers: HeadpatUsersDict = {};

export default createBotCommand(
  'cafune',
  (params, { userName, userId, say }) => {
    let headpats = 1;
    const userHeadpats = headpatUsers[userId];
    if (userHeadpats) {
      headpats += userHeadpats;
      headpatUsers[userId] = headpats;
    } else {
      headpatUsers[userId] = 1;
    }

    say(`@${userName} deu ${headpats} cafuné(s) na Hanna hoje!!`);
  },
  {
    aliases: ['cafuné', 'headpat', 'head'],
    ignoreCase: true,
  },
);
