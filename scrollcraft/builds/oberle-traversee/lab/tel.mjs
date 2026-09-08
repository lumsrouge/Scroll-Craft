import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath:'/usr/bin/google-chrome', args:['--no-sandbox'] });
const p = await b.newPage({ viewport:{ width:390, height:844 }, isMobile:true, hasTouch:true, deviceScaleFactor:2 });
await p.goto('http://localhost:4600/', { waitUntil:'load' });
await p.waitForTimeout(2500);
const H = await p.evaluate(() => document.documentElement.scrollHeight - innerHeight);
for (const [n,f] of [['t00',0.005],['t45',0.45],['t80',0.80],['t99',0.995]]) {
  await p.evaluate(y => scrollTo({top:y, behavior:'instant'}), Math.round(f*H));
  await p.waitForTimeout(1500);
  await p.screenshot({ path:`lab/tel-${n}.png` });
}
await b.close(); console.log('ok');
