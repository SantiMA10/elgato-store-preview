/**
 * @jest-environment node
 */

import { createServer, Server } from '@santima10/next-api-test-utils';
import fetch from 'isomorphic-unfetch';

import handler from '../../../../src/pages/api/hello';

describe('GET /hello', () => {
	let server: Server;

	beforeAll(async () => {
		server = await createServer({ handler });
	});

	afterAll(async () => {
		await server.stopServer();
	});

	it('should return a 200 response', async () => {
		const response = await fetch(`${server.url}/api/hello`);

		expect(response.status).toBe(200);
	});
});
