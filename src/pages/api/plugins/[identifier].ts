import type { NextApiRequest, NextApiResponse } from 'next';

interface PluginVersion {
	version_number: string;
	subtitle: string;
	description: string;
	release_notes: string;
	uploaded_at: string;
	download_link: string;
	direct_download_link: string;
	review_link: string;
	icon_link: string;
	icon_hash: string;
	localizations: [];
	previews: [];
	languages: [];
	minimum_stream_deck_version: {
		version_number: string;
	};
	minimum_os: Array<{
		platform: 'windows' | 'macos';
		version_number: string;
	}>;
	contains_profile: boolean;
}

interface Plugin {
	name: string;
	identifier: string;
	website: string;
	support_link: null | string;
	published_versions: PluginVersion[];
	blacklisted_versions: PluginVersion[];
	author: {
		name: string;
		trusted: boolean;
	};
	staff_ranking: null;
	category: 'com.elgato.audio';
	download_count: number;
	ratings: {
		average_stars: string;
		stars: {
			1: number;
			2: number;
			3: number;
			4: number;
			5: number;
		};
	};
	preinstall: boolean;
	invisible: boolean;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<{ data: Plugin }>) {
	const response = await fetch('https://appstore.elgato.com/streamDeckPlugin/catalog.flat.json');

	const data: { entries: Plugin[] } = await response.json();

	const plugin = data.entries.find((plugin) => plugin.identifier === req.query.identifier);

	if (!plugin) {
		return res.status(404).end();
	}

	res.status(200).json({ data: plugin });
}
