import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import useSWR from 'swr';

import { PluginCard } from '../components/PluginCard';

const fetcher = (url: string) => fetch(url).then(async (res) => res.json());

const Home: NextPage = () => {
	const router = useRouter();

	const { data, error } = useSWR(
		router.query.identifier && `/api/plugins/${router.query.identifier}`,
		fetcher,
	);

	if (error) return <p>An error has occurred.</p>;
	if (!data) return <p>Loading...</p>;

	const plugin = data.data;

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
