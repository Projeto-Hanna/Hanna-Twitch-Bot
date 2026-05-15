export const checkOwnerPermission = (userName: string): boolean => {
  const twitchChannelName = process.env.TWITCH_CHANNEL;
  return Boolean(
    twitchChannelName && userName === twitchChannelName.toLocaleLowerCase(),
  );
};
