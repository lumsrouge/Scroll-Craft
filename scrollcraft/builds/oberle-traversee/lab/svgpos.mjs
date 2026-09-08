import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath:'/usr/bin/google-chrome', args:['--no-sandbox'] });
const p = await b.newPage();
await p.setContent(`<svg style="position:absolute"><path id="x" style="position:absolute" d="M0 0 L50 50"/></svg>`);
console.log(await p.evaluate(() => getComputedStyle(document.getElementById('x')).position));
await b.close();
