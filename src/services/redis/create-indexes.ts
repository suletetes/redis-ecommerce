import { itemsIndexKey, itemsKey } from '$services/keys';
import { client } from './client';
import { SchemaFieldTypes } from 'redis';

export const createIndexes = async () => {
	return client.ft.create(
		itemsIndexKey(),
		{
			name: {
				type: SchemaFieldTypes.TEXT
			},
			descritpion: {
				type: SchemaFieldTypes.TEXT
			}
		},
		{
			ON: 'HASH',
			PREFIX: itemsKey('')
		}
	);
};
