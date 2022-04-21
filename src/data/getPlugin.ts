import fetch from 'isomorphic-unfetch';

import { Plugin } from '../entities/Plugin';

export const getPlugin = async (identifier: string): Promise<Plugin | undefined> => {
	const response = await fetch('https://appstore.elgato.com/streamDeckPlugin/catalog.flat.json');

	const data: { entries: Plugin[] } = await response.json();

	return data.entries.find((plugin) => plugin.identifier === identifier);
};
