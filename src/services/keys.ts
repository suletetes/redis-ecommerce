export const pageCacheKey = (id: string) => `pagecache#${id}`;

export const usersKey = (userId: string) => `user#${userId}`;

export const sessionsKey = (sessionId: string) => `sessions${sessionId}`;
export const usernamesUniqueKey = () => 'usernames:unique'
export const itemsKey = (itemId: string) => `items#${itemId}`;
export const usernamesKey = () => 'usernames';
