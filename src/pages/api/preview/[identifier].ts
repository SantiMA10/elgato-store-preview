import type { NextApiRequest, NextApiResponse } from 'next';
import playwright from 'playwright-core';

import { baseUrl } from '../../../utils/paths';

const getBrowser = async (): Promise<playwright.Browser> => {
	if (process.env.VERCEL_ENV) {
		const { default: chromium } = await import('chrome-aws-lambda');

		return await playwright.chromium.launch({
			args: chromium.args,
			executablePath: await chromium.executablePath,
			headless: chromium.headless,
		});
	}

	const { chromium } = await import('playwright');
	return chromium.launch();
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (typeof req.query.identifier !== 'string') {
		res.status(400).end();
		return;
	}

	const identifier = req.query.identifier;

	const browser = await getBrowser();

	const page = await browser.newPage({ viewport: { width: 800, height: 418 } });
	await page.goto(`${baseUrl}/card/${identifier}`, { waitUntil: 'networkidle' });
	const buffer = await page.screenshot();
	await browser.close();

	res.setHeader('Content-Type', 'image/png');
	res.send(buffer);
}
