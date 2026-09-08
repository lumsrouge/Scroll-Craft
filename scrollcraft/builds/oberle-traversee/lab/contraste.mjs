/* Contraste sur le rendu composite, mesure SOUS LES GLYPHES.
   Deux captures au meme pixel : une avec le texte, une sans. La difference
   isole les pixels reellement encres ; on grade le fond a ces pixels-la.
   Mesurer le maximum sur la boite englobante d'un titre de trois lignes en
   7rem revient a mesurer le ciel qui passe entre deux jambages. */
import { chromium } from 'playwright-core';

const W = +(process.argv[2] || 1440), Hv = +(process.argv[3] || 900);
const b = await chromium.launch({ executablePath:'/usr/bin/google-chrome', args:['--no-sandbox'] });
const p = await b.newPage({ viewport:{ width:W, height:Hv }, deviceScaleFactor:1 });
await p.goto('http://localhost:4600/', { waitUntil:'load' });
await p.waitForTimeout(2200);
const track = await p.evaluate(() => document.documentElement.scrollHeight - innerHeight);

const plateaux = [];
for (let i = 0; i <= 120; i++) {
  const f = i/120;
  await p.evaluate(y => scrollTo({top:y, behavior:'instant'}), Math.round(f*track));
  await p.waitForTimeout(40);
  const ops = await p.evaluate(() => [...document.querySelectorAll('[data-sc-copy]')]
    .map(el => parseFloat(getComputedStyle(el).opacity)||0));
  ops.forEach((o,k) => { if (o > 0.985) (plateaux[k] ||= []).push(f); });
}

const cacher = () => p.evaluate(() => {
  document.querySelectorAll('body *').forEach(el => {
    if (getComputedStyle(el).position !== 'fixed') return;
    if (el.closest('[data-sc-world],[data-sc-world-copy]')) return;
    el.setAttribute('data-cache','');
  });
  const s = document.createElement('style'); s.id='cachesty';
  s.textContent = '[data-sc-copy] h1,[data-sc-copy] h2,[data-sc-copy] p,'
    + '[data-sc-copy] span,[data-sc-copy] label,[data-sc-copy] button,'
    + '[data-sc-copy] a,[data-sc-copy] select,[data-sc-copy] input{color:transparent!important;'
    + 'text-shadow:none!important;-webkit-text-fill-color:transparent!important}'
    + '[data-cache]{visibility:hidden!important}';
  document.head.appendChild(s);
});
const montrer = () => p.evaluate(() => { document.getElementById('cachesty')?.remove();
  document.querySelectorAll('[data-cache]').forEach(e=>e.removeAttribute('data-cache')); });

const out = [];
for (let k = 0; k < plateaux.length; k++) {
  const ps = plateaux[k] || [];
  if (!ps.length) { out.push({ k, err:'jamais a pleine opacite' }); continue; }
  const ech = [ps[0], ps[Math.floor(ps.length/2)], ps[ps.length-1]];
  const pires = new Map();
  for (const f of ech) {
    await p.evaluate(y => scrollTo({top:y, behavior:'instant'}), Math.round(f*track));
    await p.waitForTimeout(420);
    const els = await p.evaluate(k => {
      const bloc = document.querySelectorAll('[data-sc-copy]')[k];
      const out = [];
      bloc.querySelectorAll('h1,h2,p,span,label,button,a').forEach((el,i) => {
        const t = [...el.childNodes].some(n => n.nodeType===3 && n.textContent.trim());
        if (!t) return;
        const r = el.getBoundingClientRect();
        const x=Math.max(0,Math.floor(r.left)), y=Math.max(0,Math.floor(r.top));
        const width=Math.min(innerWidth,Math.ceil(r.right))-x, height=Math.min(innerHeight,Math.ceil(r.bottom))-y;
        if (width<6||height<6) return;
        const cs=getComputedStyle(el);
        const gros = parseFloat(cs.fontSize)>=24 || (parseFloat(cs.fontSize)>=18.66 && +cs.fontWeight>=700);
        out.push({ i, x, y, width, height, color:cs.color, gros,
                   txt:(el.textContent||'').trim().slice(0,34) });
      });
      return out;
    }, k);
    for (const E of els) {
      const avec = (await p.screenshot({ type:'png', clip:{x:E.x,y:E.y,width:E.width,height:E.height} })).toString('base64');
      await cacher();
      const sans = (await p.screenshot({ type:'png', clip:{x:E.x,y:E.y,width:E.width,height:E.height} })).toString('base64');
      await montrer();
      const r = await p.evaluate(async ({ a, s, color }) => {
        const load = async b64 => { const i=new Image(); i.src='data:image/png;base64,'+b64; await i.decode(); return i; };
        const [ia,is]=[await load(a),await load(s)];
        const mk = im => { const c=document.createElement('canvas'); c.width=im.width; c.height=im.height;
          const g=c.getContext('2d',{willReadFrequently:true}); g.drawImage(im,0,0);
          return g.getImageData(0,0,im.width,im.height).data; };
        const A=mk(ia), S=mk(is);
        const lin=v=>{v/=255;return v<=0.03928?v/12.92:Math.pow((v+0.055)/1.055,2.4);};
        const lum=(r,g,b)=>0.2126*lin(r)+0.7152*lin(g)+0.0722*lin(b);
        const m=color.match(/[\d.]+/g).map(Number);
        const lt=lum(m[0],m[1],m[2]);                 /* couleur calculee exacte */
        const crs=[];
        for (let i=0;i<A.length;i+=4){
          const d=Math.abs(A[i]-S[i])+Math.abs(A[i+1]-S[i+1])+Math.abs(A[i+2]-S[i+2]);
          if (d<190) continue;                        /* pixel pleinement encre */
          const lb=lum(S[i],S[i+1],S[i+2]);
          crs.push((Math.max(lt,lb)+0.05)/(Math.min(lt,lb)+0.05));
        }
        if (!crs.length) return null;
        crs.sort((x,y)=>x-y);
        const p5=crs[Math.floor(crs.length*0.05)];    /* 5e centile, pas le pire pixel isole */
        const sous=crs.filter(c=>c<4.5).length/crs.length;
        return { px:crs.length, p5:+p5.toFixed(2), min:+crs[0].toFixed(2), sous:+(sous*100).toFixed(1) };
      }, { a:avec, s:sans, color:E.color });
      if (!r) continue;
      const cle = E.i;
      const prev = pires.get(cle);
      if (!prev || r.p5 < prev.p5) pires.set(cle, { ...r, txt:E.txt, gros:E.gros, f });
    }
  }
  const liste=[...pires.values()];
  const pire = liste.sort((a,b)=>a.p5-b.p5)[0];
  out.push({ k, ...(pire || { err:'aucun pixel de texte trouve' }) });
}

console.log(`\n=== CONTRASTE SOUS LES GLYPHES ${W}x${Hv} ===`);
console.log('   (5e centile des pixels encres ; seuil 4,5:1, ou 3:1 en gros texte)');
let ko=0;
for (const r of out) {
  if (r.err) { console.log(`  bloc ${r.k}: ${r.err}`); ko++; continue; }
  const seuil = r.gros ? 3 : 4.5;
  const ok = r.p5 >= seuil;
  if (!ok) ko++;
  console.log(`  bloc ${r.k}  ${ok?'OK   ':'ECHEC'}  p5=${String(r.p5).padStart(6)}:1  min=${String(r.min).padStart(5)}  ${String(r.sous).padStart(5)}% sous 4,5  « ${r.txt} »`);
}
console.log(ko ? `\n${ko} bloc(s) en echec` : '\nTous les blocs passent.');
await b.close();
