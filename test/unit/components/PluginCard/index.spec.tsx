import { render } from '@testing-library/react';

import { PluginCard } from '../../../../src/components/PluginCard';
import { Plugin } from '../../../../src/entities/Plugin';
import { PluginBuilder } from '../../../builders/PluginBuilder';

describe('PluginCard', () => {
	it('shows the name of the plugin', async () => {
		const plugin: Plugin = PluginBuilder.build({ name: 'Test Plugin' });
		const { getByText } = render(<PluginCard plugin={plugin} />);

		expect(getByText(/Test plugin/i)).toBeInTheDocument();
	});

	it('shows the author of the plugin', async () => {
		const plugin: Plugin = PluginBuilder.build({ author: { name: 'Author' } });
		const { getByText } = render(<PluginCard plugin={plugin} />);

		expect(getByText(/Author/i)).toBeInTheDocument();
	});

	it('shows the category of the plugin', async () => {
		const plugin: Plugin = PluginBuilder.build({ category: 'com.elgato.general' });
		const { getByText } = render(<PluginCard plugin={plugin} />);

		expect(getByText(/general/i)).toBeInTheDocument();
	});

	it('shows the description of the last release of the plugin', async () => {
		const plugin: Plugin = PluginBuilder.build({
			published_versions: [{ description: 'Test description' }],
		});
		const { getByText } = render(<PluginCard plugin={plugin} />);

		expect(getByText(/Test description/i)).toBeInTheDocument();
	});

	it('shows the version of the last release of the plugin', async () => {
		const plugin: Plugin = PluginBuilder.build({
			published_versions: [{ version_number: '1.2.3' }],
		});
		const { getByText } = render(<PluginCard plugin={plugin} />);

		expect(getByText(/1\.2\.3/i)).toBeInTheDocument();
	});

	it('shows the download count of the plugin', async () => {
		const plugin: Plugin = PluginBuilder.build({
			download_count: 1234,
		});
		const { getByText } = render(<PluginCard plugin={plugin} />);

		expect(getByText(/1,234/i)).toBeInTheDocument();
	});

	it('shows the average starts of the plugin', async () => {
		const plugin: Plugin = PluginBuilder.build({
			ratings: { average_stars: '4.5' },
		});
		const { getByText } = render(<PluginCard plugin={plugin} />);

		expect(getByText(/4\.5/i)).toBeInTheDocument();
	});
});
