/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const nextJest = require('next/jest');

const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
	setupFilesAfterEnv: ['<rootDir>/test/jest.setup.ts'],
	// if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
	moduleDirectories: ['node_modules', '<rootDir>/'],
	testEnvironment: 'jest-environment-jsdom',
	reporters: [
		'default',
		[
			'@santima10/jest-chat-reporter',
			{
				channels: ['SantiMA10'],
				username: process.env.TWITCH_USERNAME,
				password: process.env.TWITCH_PASSWORD,
				messagesOnWatchMode: false,
				onlyCI: true,
				useAnnounce: true,
			},
		],
	],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
