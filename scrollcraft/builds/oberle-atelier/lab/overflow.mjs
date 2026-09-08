import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath:'/usr/bin/google-chrome', args:['--no-sandbox'] });
for (const [w,h] of [[1440,900],[390,844],[768,1024]]) {
  const p = await b.newPage({ viewport:{width:w,height:h} });
  await p.goto('http://localhost:4500',{waitUntil:'networkidle'}); await p.waitForTimeout(1200);
  const bad = await p.evaluate(()=>{
    const out=[]; const vw=document.documentElement.clientWidth;
    document.querySelectorAll('main *, .bar *').forEach(el=>{
      const r=el.getBoundingClientRect();
      if (r.width>0 && (r.right > vw+2 || r.left < -2) && getComputedStyle(el).position!=='fixed'
          && !el.closest('[aria-hidden=true]') && !el.closest('.pal'))
        out.push((el.className||el.tagName)+' '+Math.round(r.left)+'..'+Math.round(r.right)+' / '+vw);
    });
    return [...new Set(out)].slice(0,8);
  });
  console.log(w+'x'+h, bad.length? 'OVERFLOW: '+JSON.stringify(bad,null,1) : 'no horizontal overflow');
  await p.close();
}
await b.close();
