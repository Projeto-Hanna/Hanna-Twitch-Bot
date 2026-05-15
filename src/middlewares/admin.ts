export const checkOwnerPermission = (userId: string): boolean => {
  const twitchChannelOwnerId = process.env.TWITCH_CHANNEL_OWNER_USER_ID;
  return Boolean(twitchChannelOwnerId && userId === twitchChannelOwnerId);
};
