import type { GetServerSideProps, NextPage } from 'next';

const Home: NextPage = () => {
	return <p>Hello there</p>;
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
	return {
		props: {},
		redirect: {
			destination: 'https://github.com/SantiMA10/elgato-store-preview',
			permanent: false,
		},
	};
};
