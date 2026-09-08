import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath:'/usr/bin/google-chrome', args:['--no-sandbox'] });
const p = await b.newPage({ viewport:{width:390,height:844}, isMobile:true, hasTouch:true, deviceScaleFactor:2 });
await p.goto('http://localhost:4500',{waitUntil:'networkidle'}); await p.waitForTimeout(1500);
const r = await p.evaluate(()=>({total:+(document.body.scrollHeight/innerHeight).toFixed(2),
  s:[...document.querySelectorAll('main > section')].map(s=>({id:s.id,vh:+(s.getBoundingClientRect().height/innerHeight).toFixed(2)}))}));
console.log('MOBILE TOTAL', r.total); r.s.forEach(x=>console.log('  ',x.vh,x.id));
await b.close();
