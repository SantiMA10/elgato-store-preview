import * as Factory from 'factory.ts';

import { Plugin } from '../../src/entities/Plugin';

export const PluginBuilder = Factory.Sync.makeFactory<Plugin>({
	name: 'DevOps for StreamDeck',
	identifier: 'dev.santiagomartin.devops',
	website: 'https://santiagomartin.dev',
	support_link: null,
	published_versions: [
		{
			version_number: '1.7.0',
			subtitle:
				'Check the status of your GitLab CI, GitHub Actions, Netlify, Vercel and Travis CI projects.',
			description:
				'Check the status of your GitLab CI, GitHub Actions, Netlify, Vercel and Travis CI projects.',
			release_notes: 'Support for GitHub Notifications Support for GitLab TODOs',
			uploaded_at: '2022-03-07T20:13:36.846787Z',
			download_link:
				'https://appstoreconnect.elgato.com/store/download/streamDeckPlugin/dev.santiagomartin.devops/1.7.0/',
			direct_download_link:
				'https://appstore.elgato.com/streamDeckPlugin/dev.santiagomartin.devops/1.7.0/dev.santiagomartin.devops.streamDeckPlugin',
			review_link:
				'https://appstoreconnect.elgato.com/store/review/streamDeckPlugin/dev.santiagomartin.devops/1.7.0/',
			icon_link:
				'https://appstore.elgato.com/streamDeckPlugin/dev.santiagomartin.devops/1.7.0/dev.santiagomartin.devops.png',
			icon_hash: 'LJ8|^lWB00t7ofRjfQxu00of_3WB',
			localizations: [],
			previews: [],
			languages: [],
			minimum_stream_deck_version: {
				version_number: '4.1',
			},
			minimum_os: [
				{
					platform: 'mac',
					version_number: '10.11',
				},
				{
					platform: 'windows',
					version_number: '10',
				},
			],
			contains_profile: false,
		},
	],
	blacklisted_versions: [],
	author: {
		name: 'SantiMA10',
		trusted: false,
	},
	staff_ranking: null,
	category: 'com.elgato.developer-tools',
	download_count: 11707,
	ratings: {
		average_stars: '2.4',
		stars: {
			1: 7,
			2: 12,
			3: 8,
			4: 2,
			5: 3,
		},
	},
	preinstall: false,
	invisible: false,
});
