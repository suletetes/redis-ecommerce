export const pageCacheKey = (id: string) => `pagecache#${id}`;

export const usersKey = (userId: string) => `user#${userId}`;

const sessionsKey = (sessionId: string) => `sessions${sessionId}`;
