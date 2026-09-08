import { chromium } from 'playwright-core';
const W = +(process.argv[2]||1440), H = +(process.argv[3]||900), OUT = process.argv[4]||'lab/sec';
import fs from 'node:fs'; fs.mkdirSync(OUT,{recursive:true});
const b = await chromium.launch({ executablePath:'/usr/bin/google-chrome', args:['--no-sandbox','--autoplay-policy=no-user-gesture-required'] });
const p = await b.newPage({ viewport:{width:W,height:H}, deviceScaleFactor:1 });
await p.goto('http://localhost:4500',{waitUntil:'networkidle'});
await p.waitForTimeout(1500);
const ids = await p.evaluate(()=>[...document.querySelectorAll('main > section')].map(s=>s.id));
for (const id of ids){
  await p.evaluate((i)=>{const el=document.getElementById(i);
    const r=el.getBoundingClientRect(); window.scrollTo(0, scrollY + r.top + Math.min(r.height*0.5, innerHeight*0.45) - innerHeight*0.42);}, id);
  await p.waitForTimeout(1100);
  await p.screenshot({ path:`${OUT}/${id}.png` });
}
// tab order
await p.evaluate(()=>window.scrollTo(0,0)); await p.waitForTimeout(300);
const order=[];
for(let i=0;i<16;i++){ await p.keyboard.press('Tab');
  order.push(await p.evaluate(()=>{const a=document.activeElement;
    return (a.tagName+' '+(a.getAttribute('aria-label')||a.textContent||'').trim().slice(0,44));})); }
console.log('TAB ORDER:'); order.forEach((o,i)=>console.log(' ',i+1,o));
await b.close();
