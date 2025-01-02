import type { Session } from '$services/types';
import {sessionKey} from '../../../seeds/seed-keys';
import {client} from '$services/redis';

export const getSession = async (id: string) => {
	const session = await client.hGetAll(sessionKey(id))

	return session
};

export const saveSession = async (session: Session) => {};
