/**
 * @jest-environment node
 */

import nock from 'nock';

import { getPlugin } from '../../../src/data/getPlugin';
import { PluginBuilder } from '../../builders/PluginBuilder';

describe('getPlugin', () => {
	it('returns a plugin if it exists', async () => {
		nock('https://appstore.elgato.com')
			.get('/streamDeckPlugin/catalog.flat.json')
			.reply(200, { entries: [PluginBuilder.build({ identifier: 'test' })] });
		const plugin = await getPlugin('test');

		expect(plugin).toMatchObject({ identifier: 'test' });
	});

	it('returns undefined if the plugin does not exist', async () => {
		nock('https://appstore.elgato.com')
			.get('/streamDeckPlugin/catalog.flat.json')
			.reply(200, { entries: [] });
		const plugin = await getPlugin('test');

		expect(plugin).toBeUndefined();
	});
});
