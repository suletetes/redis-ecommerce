import { client } from '$services/redis';
import { itemsKey, itemsByViewsKey } from '$services/keys';
import { itemsViewsKey } from '../../../seeds/seed-keys';

export const incrementView = async (itemId: string, userId: string) => {
	return client.incrementView(itemId, userId)

};

