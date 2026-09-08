import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath:'/usr/bin/google-chrome', args:['--no-sandbox'] });
const p = await b.newPage({ viewport:{ width:1440, height:900 } });
await p.goto('http://localhost:4600/', { waitUntil:'load' });
await p.waitForTimeout(2200);
const track = await p.evaluate(() => document.documentElement.scrollHeight - innerHeight);
for (const [nom,f] of [['b0',0.008],['b3',0.633],['b4',0.750]]) {
  await p.evaluate(y => scrollTo({top:y, behavior:'instant'}), Math.round(f*track));
  await p.waitForTimeout(1400);
  await p.screenshot({ path:`lab/pire-${nom}.png` });
}
await b.close(); console.log('ok');
