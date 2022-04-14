import { render } from '@testing-library/react';

import Home from '../../../src/pages';

describe('Home', () => {
	it('welcomes the user', async () => {
		const { getByText } = render(<Home />);

		expect(getByText('Welcome to Next.js!')).toBeInTheDocument();
	});
});
