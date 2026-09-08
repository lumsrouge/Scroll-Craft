import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args:['--no-sandbox'] });
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto('http://localhost:4500', { waitUntil: 'networkidle' });
await p.waitForTimeout(1200);
const r = await p.evaluate(() => {
  const vh = innerHeight;
  const out = [...document.querySelectorAll('main > section')].map(s => ({
    id: s.id, vh: +(s.getBoundingClientRect().height / vh).toFixed(2)
  }));
  return { total: +(document.body.scrollHeight / vh).toFixed(2), out,
           railOverflow: null };
});
console.log('TOTAL', r.total, 'vh');
r.out.forEach(s => console.log(String(s.vh).padStart(6), s.id));
await b.close();
