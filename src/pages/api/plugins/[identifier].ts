import type { NextApiRequest, NextApiResponse } from 'next';

import { Plugin } from '../../../entities/Plugin';

export default async function handler(req: NextApiRequest, res: NextApiResponse<{ data: Plugin }>) {
	const response = await fetch('https://appstore.elgato.com/streamDeckPlugin/catalog.flat.json');

	const data: { entries: Plugin[] } = await response.json();

	const plugin = data.entries.find((plugin) => plugin.identifier === req.query.identifier);

	if (!plugin) {
		return res.status(404).end();
	}

	res.status(200).json({ data: plugin });
}
