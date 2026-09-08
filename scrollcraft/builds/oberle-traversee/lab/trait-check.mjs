import { chromium } from 'playwright-core';
import fs from 'node:fs';
const d = fs.readFileSync('index.html','utf8').match(/id="traitLigne"[\s\S]*?d="([\s\S]*?)"/)[1];
const html = `<body style="margin:0;background:#F4EFE4">
<svg width="520" height="520" viewBox="0 0 1000 1000">
<path d="${d}" fill="none" stroke="#14100E" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
</svg></body>`;
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args:['--no-sandbox'] });
const p = await b.newPage({ viewport:{width:520,height:520} });
await p.setContent(html);
await p.screenshot({ path:'lab/trait.png' });
await b.close();
console.log('lab/trait.png');
