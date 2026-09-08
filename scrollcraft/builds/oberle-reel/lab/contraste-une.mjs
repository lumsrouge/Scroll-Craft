/* Contraste du titre à l'atterrissage, mesuré SOUS les glyphes.
   Deux captures du même cadre, avec et sans le titre : les pixels qui
   changent sont l'encre. On note leur luminance contre le fond réel. */
import { chromium } from 'playwright-core';
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

const b = await chromium.launch({ executablePath:'/usr/bin/google-chrome', args:['--no-sandbox'] });
const p = await b.newPage({ viewport:{width:1440,height:900}, deviceScaleFactor:1 });
await p.goto('http://localhost:4500/');
await p.waitForFunction(()=>document.documentElement.classList.contains('sc-ready'));
await p.waitForTimeout(1400);
const box = await p.locator('.mast').boundingBox();
const clip = { x:Math.round(box.x), y:Math.round(box.y), width:Math.round(box.width), height:Math.round(box.height) };
await p.screenshot({ path:'lab/c-avec.png', clip });
await p.evaluate(()=>{ document.querySelector('.mast').style.visibility='hidden'; });
await p.waitForTimeout(250);
await p.screenshot({ path:'lab/c-sans.png', clip });
await b.close();

const raw = f => { execFileSync('ffmpeg',['-y','-v','error','-i',f,'-f','rawvideo','-pix_fmt','rgb24',f+'.raw']); return readFileSync(f+'.raw'); };
const A = raw('lab/c-avec.png'), B = raw('lab/c-sans.png');
const lin = v => { v/=255; return v<=0.03928 ? v/12.92 : Math.pow((v+0.055)/1.055,2.4); };
const L = (r,g,bl) => 0.2126*lin(r)+0.7152*lin(g)+0.0722*lin(bl);
const ratio = (a,b2) => { const [h,l]=a>b2?[a,b2]:[b2,a]; return (h+0.05)/(l+0.05); };

const rs = [];
for (let i=0;i<A.length;i+=3) {
  const d = Math.abs(A[i]-B[i])+Math.abs(A[i+1]-B[i+1])+Math.abs(A[i+2]-B[i+2]);
  if (d < 40) continue;                               // pas d'encre ici
  rs.push(ratio(L(A[i],A[i+1],A[i+2]), L(B[i],B[i+1],B[i+2])));
}
rs.sort((x,y)=>x-y);
const q = f => rs[Math.min(rs.length-1, Math.floor(f*rs.length))];
const sous3 = rs.filter(r=>r<3).length/rs.length;
console.log(`pixels encrés          ${rs.length}`);
console.log(`5e centile             ${q(0.05).toFixed(2)}:1`);
console.log(`médiane                ${q(0.50).toFixed(2)}:1`);
console.log(`95e centile            ${q(0.95).toFixed(2)}:1`);
console.log(`part sous 3:1          ${(sous3*100).toFixed(1)} %`);
