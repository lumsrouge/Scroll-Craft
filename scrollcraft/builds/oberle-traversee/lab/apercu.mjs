import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath:'/usr/bin/google-chrome', args:['--no-sandbox'] });
const p = await b.newPage({ viewport:{ width:1440, height:900 } });
await p.goto('http://localhost:4600/', { waitUntil:'load' });
await p.waitForTimeout(2500);
const H = await p.evaluate(() => document.documentElement.scrollHeight - innerHeight);
for (const t of [0.10, 0.28, 0.42, 0.58, 0.75, 0.90, 0.94, 0.97, 1.0]) {
  await p.evaluate(y => scrollTo({ top:y, behavior:'instant' }), Math.round(t*H));
  await p.waitForTimeout(1500);
  await p.screenshot({ path:`lab/ap-${String(Math.round(t*100)).padStart(2,'0')}.png` });
}
await b.close(); console.log('apercus ok');
