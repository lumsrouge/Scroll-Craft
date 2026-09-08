import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath:'/usr/bin/google-chrome', args:['--no-sandbox'] });
const p = await b.newPage({ viewport:{ width:1440, height:900 } });
await p.goto('http://localhost:4600/', { waitUntil:'load' });
await p.waitForTimeout(2000);
const H = await p.evaluate(() => document.documentElement.scrollHeight - innerHeight);
const res = [];
for (let i = 0; i <= 60; i++) {
  const f = i/60;
  await p.evaluate(y => scrollTo({top:y, behavior:'instant'}), Math.round(f*H));
  await p.waitForTimeout(90);
  const ops = await p.evaluate(() => [...document.querySelectorAll('[data-sc-copy]')]
    .map(el => +(+getComputedStyle(el).opacity).toFixed(3)));
  res.push([+(f).toFixed(3), ops]);
}
const n = res[0][1].length;
for (let k = 0; k < n; k++) {
  const m = Math.max(...res.map(r => r[1][k]));
  const at = res.filter(r => r[1][k] > 0.85).map(r => r[0]);
  console.log(`bloc ${k}: max=${m.toFixed(2)}  >0.85 sur ${at.length} positions  ${at.length?`[${at[0]}..${at[at.length-1]}]`:''}`);
}
await b.close();
