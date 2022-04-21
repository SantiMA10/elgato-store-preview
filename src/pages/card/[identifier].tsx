import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

import { PluginCard } from '../../components/PluginCard';
import { getPlugin } from '../../data/getPlugin';
import { Plugin } from '../../entities/Plugin';

interface Props {
	plugin: Plugin;
}

const Home: NextPage<Props> = ({ plugin }: Props) => {
	return (
		<>
			<Head>
				<title>{`${plugin.name} by ${plugin.author.name}`}</title>
				<link rel="icon" href={plugin.published_versions[0].icon_link} />
			</Head>

			<PluginCard plugin={plugin} />
		</>
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

	const plugin = await getPlugin(context.query.identifier.toString());

	return {
		props: {
			plugin,
		},
	};
};
