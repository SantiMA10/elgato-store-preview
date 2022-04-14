/**
 * @jest-environment node
 */

import { createServer, Server } from '@santima10/next-api-test-utils';
import fetch from 'isomorphic-unfetch';
import nock from 'nock';

import handler from '../../../../../src/pages/api/plugins/[identifier]';

describe('GET /api/plugins/{identifier}', () => {
	let server: Server;

	beforeAll(async () => {
		server = await createServer({ handler });
	});

	afterAll(async () => {
		await server.stopServer();
	});

	it('returns a 200 response', async () => {
		nock('https://appstore.elgato.com')
			.get('/streamDeckPlugin/catalog.flat.json')
			.reply(200, { entries: [{ identifier: 'test' }] });
		server.updateQuery({ identifier: 'test' });
		const response = await fetch(server.url);

		expect(response.status).toBe(200);
	});

	it('returns a 404 if the plugin does not exit', async () => {
		nock('https://appstore.elgato.com')
			.get('/streamDeckPlugin/catalog.flat.json')
			.reply(200, { entries: [] });
		server.updateQuery({ identifier: 'test' });
		const response = await fetch(server.url);

		expect(response.status).toBe(404);
	});

	it('returns a 500 if the elgato server is unavailable', async () => {
		nock('https://appstore.elgato.com').get('/streamDeckPlugin/catalog.flat.json').reply(500);
		server.updateQuery({ identifier: 'test' });
		const response = await fetch(server.url);

		expect(response.status).toBe(500);
	});
});
