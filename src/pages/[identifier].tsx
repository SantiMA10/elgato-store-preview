import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

import { getPlugin } from '../data/getPlugin';
import { Plugin } from '../entities/Plugin';
import { baseUrl } from '../utils/paths';

interface Props {
	plugin: Plugin;
}

const Home: NextPage<Props> = ({ plugin }: Props) => {
	return (
		<Head>
			<title>{`${plugin.name} by ${plugin.author.name}`}</title>
			<link rel="icon" href={plugin.published_versions[0].icon_link} />
			<meta name="twitter:card" content="summary_large_image"></meta>
			<meta name="twitter:title" content={plugin.name} />
			<meta name="twitter:image" content={`${baseUrl}/api/preview/${plugin.identifier}`} />

			<meta name="og:title" content={`${plugin.name} by ${plugin.author.name}`} />
			<meta name="og:description" content={plugin.published_versions[0].description} />
			<meta name="og:image" content={`${baseUrl}/api/preview/${plugin.identifier}`} />
		</Head>
	);
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
	if (!context.query.identifier) {
		return {
			props: {},
			notFound: true,
		};
	}

	if (
		!context.req.headers['user-agent']?.includes('Twitterbot') &&
		context.query.noRedirect === undefined
	) {
		return {
			props: {},
			redirect: {
				destination: `https://apps.elgato.com/plugins/${context.query.identifier}`,
				permanent: false,
			},
		};
	}

	const plugin = await getPlugin(context.query.identifier.toString());

	return {
		props: {
			plugin,
		},
	};
};
