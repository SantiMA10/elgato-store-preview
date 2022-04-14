import { PluginVersion } from './PluginVersion';

export interface Plugin {
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
