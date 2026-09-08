import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args:['--no-sandbox'] });
const p = await b.newPage({ viewport: { width: 1220, height: 700 }, deviceScaleFactor: 1 });
await p.goto('file://' + process.cwd() + '/lab/probe.html');
await p.waitForTimeout(900);
await p.locator('#a').screenshot({ path: 'lab/probe-a.png' });
await p.locator('#b').screenshot({ path: 'lab/probe-b.png' });
await b.close();
