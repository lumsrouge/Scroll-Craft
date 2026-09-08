import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath:'/usr/bin/google-chrome', args:['--no-sandbox'] });
const bad = [];
for (const [w,h,tag] of [[1440,900,'desktop'],[390,844,'phone']]) {
  const p = await b.newPage({ viewport:{width:w,height:h} });
  p.on('console', m=>{ if(m.type()==='error') bad.push(tag+' console: '+m.text()); });
  p.on('requestfailed', r=>bad.push(tag+' failed: '+r.url()));
  p.on('response', r=>{ if(r.status()>=400) bad.push(tag+' '+r.status()+' '+r.url()); });
  await p.goto('http://localhost:4900/',{waitUntil:'networkidle'});
  await p.waitForTimeout(900);
  await p.screenshot({ path:`lab/root-${tag}.png` });
  // the link must actually land on the site
  await Promise.all([p.waitForNavigation({waitUntil:'domcontentloaded'}), p.click('a.go')]);
  await p.waitForTimeout(2200);
  const info = await p.evaluate(()=>({url:location.pathname, title:document.title,
    h1:(document.querySelector('h1')||{}).textContent, bar:!!document.querySelector('.bar')}));
  console.log(tag, JSON.stringify(info));
  await p.close();
}
console.log(bad.length? 'PROBLEMS:\n'+bad.join('\n') : 'no console errors, no failed requests');
await b.close();
