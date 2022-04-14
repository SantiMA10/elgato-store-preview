/* eslint-disable @next/next/no-img-element */
import { faDownload, faStar, faTags } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Plugin } from '../../entities/Plugin';

interface Props {
	plugin: Plugin;
}

const categories = {
	'com.elgato.audio': 'Audio',
	'com.elgato.video': 'Video',
	'com.elgato.utilities': 'Utilities',
	'com.elgato.lighting': 'Lighting',
	'com.elgato.developer-tools': 'Developer tools',
	'com.elgato.gaming': 'Gaming',
	'com.elgato.engagement': 'Engagement',
	'com.elgato.finance': 'Finance',
	'com.elgato.productivity': 'Productivity',
	'com.elgato.music': 'Music',
	'com.elgato.social': 'Social',
	'com.elgato.smart-home': 'Smart home',
	'com.elgato.general': 'General',
	'com.elgato.streaming': 'Streaming',
	'com.elgato.monitoring': 'Monitoring',
};

export const PluginCard = ({ plugin }: Props) => {
	return (
		<div className="min-h-screen flex flex-col bg-slate-700 text-white">
			<div className="grid grid-cols-2 flex-1">
				<div className="flex items-center justify-center">
					<img src={plugin.published_versions[0].icon_link} />
				</div>
				<div className="flex flex-col justify-center">
					<p className="text-6xl font-bold underline">{plugin.name}</p>
					<p className="text-4xl font-bold">{`by ${plugin.author.name}`}</p>
					<p className="text-2xl mt-4 mb-4">{plugin.published_versions[0].description}</p>
					<p className="text-2xl">{categories[plugin.category]}</p>
				</div>
			</div>

			<div className="grid grid-cols-3 bg-slate-500 p-4">
				<p className="text-xl flex gap-3 justify-center items-center">
					<FontAwesomeIcon icon={faTags} />
					{plugin.published_versions[0].version_number}
				</p>
				<p className="text-xl flex gap-3 justify-center items-center">
					<FontAwesomeIcon icon={faDownload} />
					{new Intl.NumberFormat('en').format(plugin.download_count)}
				</p>
				<p className="text-xl flex gap-3 justify-center items-center">
					<FontAwesomeIcon icon={faStar} />
					{plugin.ratings.average_stars}
				</p>
			</div>
		</div>
	);
};
