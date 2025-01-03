export const pageCacheKey = (id: string) => `pagecache#${id}`;

export const usersKey = (userId: string) => `user#${userId}`;

export const sessionsKey = (sessionId: string) => `sessions${sessionId}`;
export const usernamesUniqueKey = () => 'usernames:unique';
export const usernamesKey = () => 'usernames';

// items
export const itemsKey = (itemId: string) => `items#${itemId}`;
export const itemsByViewsKey = () => 'items:views';
export const itemsByEndingAtKey = () => 'items:endingAt';
