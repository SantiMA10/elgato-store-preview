export interface PluginVersion {
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
