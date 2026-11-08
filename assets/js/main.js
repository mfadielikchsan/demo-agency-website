const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const PAGES=[["index.html","Home"],["about.html","About"],["services.html","Services"],["creators.html","Creators"],["portfolio.html","Our Work"],["contact.html","Contact"]];
let cur=location.pathname.split('/').pop()||'index.html';cur=cur.replace('creator-detail','creators').replace('project-detail','portfolio');if(!cur.endsWith('.html'))cur+='.html';
$('#nav').outerHTML=`<nav id="nav"><a class="logo" href="index.html">DE <i>KLIKERS</i><span class="cur"></span></a><button class="burger" aria-label="Menu" aria-expanded="false">☰</button><div class="links">${PAGES.map(p=>`<a href="${p[0]}" class="${p[0]==cur?'on':''}">${p[1]}</a>`).join('')}<a class="btn p" href="contact.html">Let's Talk</a></div></nav>`;
$('#foot').outerHTML=`<footer><h2>Let's make your next big idea click.</h2><div class="fg"><div><a class="logo" href="index.html">DE <i>KLIKERS</i><span class="cur"></span></a><p>We make brands click with the world. De Klikers is a creative and influencer marketing agency (fictional prototype).</p></div><div><h4>Explore</h4>${PAGES.map(p=>`<a href="${p[0]}">${p[1]}</a>`).join('')}</div><div><h4>Services</h4>${SV.map(s=>`<a href="services.html">${s[0]}</a>`).join('')}</div><div><h4>Say hello</h4><a href="mailto:hello@deklikers.com">hello@deklikers.com</a><a href="contact.html">WhatsApp +62 812-3456-7890</a><a href="contact.html">Instagram @deklikers</a><a href="contact.html">TikTok @deklikers</a><a href="contact.html">LinkedIn De Klikers</a></div></div><p class="copy">© 2026 De Klikers. Demo prototype: all people, brands, figures and contact details are fictional.</p></footer>`;
const nav=$('#nav'),bg=$('.burger'),lk=$('.links');
bg.onclick=()=>{const o=lk.classList.toggle('open');bg.setAttribute('aria-expanded',o);bg.textContent=o?'✕':'☰'};
$$('.links a').forEach(a=>a.addEventListener('click',()=>lk.classList.remove('open')));
const sc=()=>nav.classList.toggle('s',scrollY>40);sc();addEventListener('scroll',sc,{passive:true});
addEventListener('error',e=>{if(e.target.tagName=='IMG')e.target.classList.add('bad')},true);
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
const obs=()=>$$('.rv:not(.in)').forEach(e=>io.observe(e));
const count=el=>{const t=+el.dataset.n,s=el.dataset.s||'';let n=0;const f=()=>{n+=t/40;el.textContent=(n>=t?t:Math.floor(n)).toLocaleString()+s;if(n<t)requestAnimationFrame(f)};f()};
const co=new IntersectionObserver((es,o)=>es.forEach(e=>{if(e.isIntersecting){count(e.target);o.unobserve(e.target)}}));$$('[data-n]').forEach(e=>co.observe(e));
const fmt=k=>k>=1000?k/1000+'M':k+'K';
const crCard=c=>`<a class="cr rv" href="creator-detail.html?id=${c.id}"><img loading="lazy" src="${U(c.img,700)}" alt="Portrait of ${c.name}"><em>${fmt(c.f)}</em><div><b>${c.name}</b><span>@${c.user} · ${c.cat} · ${c.plat}</span></div></a>`;
const pjCard=p=>`<a class="pj rv" href="project-detail.html?id=${p.id}"><div class="im"><img loading="lazy" src="${U(p.img,1000)}" alt="${p.name} campaign for ${p.brand}"></div><h3>${p.name}</h3><small>${p.brand} · ${p.cat} · ${p.year}</small><p>${p.desc}</p></a>`;
const params=new URLSearchParams(location.search);
if($('#hc')){$('#hc').innerHTML=[9,3,1,7,5,12].map(i=>crCard(CR[i-1])).join('');$('#hp').innerHTML=PJ.slice(0,4).map(pjCard).join('')}
if($('#cg')){const q=$('#q'),cat=$('#cat'),pl=$('#pl'),so=$('#so');
cat.innerHTML='<option value="">All categories</option>'+[...new Set(CR.map(c=>c.cat))].map(c=>`<option>${c}</option>`).join('');pl.innerHTML='<option value="">All platforms</option>'+[...new Set(CR.map(c=>c.plat))].map(c=>`<option>${c}</option>`).join('');
const r=()=>{let l=CR.filter(c=>(!cat.value||c.cat==cat.value)&&(!pl.value||c.plat==pl.value)&&(c.name+c.user).toLowerCase().includes(q.value.trim().toLowerCase().replace('@','')));
if(so.value)l.sort((a,b)=>so.value=='d'?b.f-a.f:a.f-b.f);$('#cg').innerHTML=l.map(crCard).join('');$('#em').style.display=l.length?'none':'block';$('#ct').textContent=l.length+' creators';obs()};
[q,cat,pl,so].forEach(e=>e.oninput=r);$$('.clr').forEach(b=>b.onclick=()=>{q.value=cat.value=pl.value=so.value='';r()});r()}
if($('#dt')){const c=CR.find(x=>x.id==params.get('id'))||CR[0];document.title=c.name+' | De Klikers';
const aud=[["Women 18–24",38],["Women 25–34",31],["Men 18–34",22],["Other",9]],imgs=['photo-1469334031218-e382a71b716b','photo-1496747611176-843222e1e57c','photo-1515886657613-9f3515b0c78f'];
$('#dt').innerHTML=`<div class="det"><div class="ph"><img src="${U(c.img,1000)}" alt="${c.name}"></div><div><p class="sub">${c.cat} creator · ${c.loc}</p><h1 style="font-size:var(--fs-title)">${c.name}</h1><p style="margin:1rem 0">@${c.user} on ${c.plat}. ${c.name.split(' ')[0]} builds a loyal ${c.cat.toLowerCase()} audience through honest, well-shot everyday content.</p>
<div class="kv"><div><b>${fmt(c.f)}</b><span>Followers</span></div><div><b>${c.er}%</b><span>Engagement</span></div><div><b>${c.plat}</b><span>Main platform</span></div></div>
<h3 style="margin:2rem 0 .8rem">Audience</h3><div class="bars">${aud.map(a=>`<div><span>${a[0]}</span><i style="--w:${a[1]*2}%"></i><span>${a[1]}%</span></div>`).join('')}</div>
<h3 style="margin:2rem 0 .8rem">Content</h3><div class="gal">${imgs.map(i=>`<div><img loading="lazy" src="${U(i,600)}" alt="Content by ${c.name}"></div>`).join('')}</div>
<h3 style="margin:2rem 0 .8rem">Past collaborations</h3>${PJ.filter(p=>(p.id+c.id)%3==0).slice(0,3).map(p=>`<p><a href="project-detail.html?id=${p.id}" style="color:var(--ac)">${p.name}</a>, ${p.brand} (${p.year})</p>`).join('')}
<div class="row" style="margin-top:2rem"><a class="btn p" href="contact.html?creator=${c.user}">Collaborate with ${c.name.split(' ')[0]}</a><a class="btn" href="creators.html">All creators</a></div><p class="note">All profile data is fictional demo content.</p></div></div>`}
if($('#pg')){$('#chips').innerHTML=['All',...new Set(PJ.map(p=>p.cat))].map((c,i)=>`<button class="${i?'':'on'}">${c}</button>`).join('');
const r=c=>{$('#pg').innerHTML=PJ.filter(p=>c=='All'||p.cat==c).map(pjCard).join('');obs()};r('All');
$$('#chips button').forEach(b=>b.onclick=()=>{$$('#chips button').forEach(x=>x.classList.remove('on'));b.classList.add('on');r(b.textContent)})}
if($('#pd')){const p=PJ.find(x=>x.id==params.get('id'))||PJ[0];document.title=p.name+' | De Klikers';const cr=CR.filter(c=>c.cat==p.cat.split(' ')[0]||c.id==p.id).slice(0,4);
const S=(t,b)=>`<div class="sec"><h3>${t}</h3><p style="max-width:60ch">${b}</p></div>`;
$('#pd').innerHTML=`<div class="pg"><p class="sub">${p.brand} · ${p.cat} · ${p.year}</p><h1>${p.name}</h1></div><div style="height:min(80vh,760px)"><img src="${U(p.img,1800)}" alt="${p.name}"></div><div class="wrap">${S('Overview',p.desc+' A fictional demo case study for '+p.brand+'.')}${S('Objective','Make '+p.brand+' familiar to a new audience within one campaign cycle, through creators people already trust.')}${S('Creative direction','Real settings, natural light, no scripts. Each creator kept their own voice while sharing one visual rule: show the moment, not the product shot.')}${S('Execution','Four weeks of production, a staggered publishing plan and weekly reviews that shifted effort toward the formats working best.')}
<div class="fig"><div><img loading="lazy" src="${U(p.img,1400)}" alt="${p.name}"></div><div><img loading="lazy" src="${U('photo-1492691527719-9d1e07e534b4',800)}" alt="Behind the scenes"></div><div><img loading="lazy" src="${U('photo-1557804506-669a67965ba0',800)}" alt="Campaign planning"></div></div>
<div class="stats"><div><b data-n="15">0</b>Creators</div><div><b data-n="2.1">0</b>Reach (millions)</div><div><b data-n="180" data-s="K">0</b>Engagement</div><div><b data-n="45">0</b>Content pieces</div></div><p class="note">Results are fictional demo data.</p>
<div class="sec"><h3>Selected creators</h3><div class="cg">${cr.map(crCard).join('')}</div></div>${S('Deliverables','Short-form video, photo sets, stories, live sessions and a creator-led launch moment.')}
<h2 style="margin:4rem 0 2rem">More work</h2><div class="pf">${PJ.filter(x=>x.id!=p.id).slice(0,2).map(pjCard).join('')}</div></div>`;$$('[data-n]').forEach(e=>co.observe(e))}
if($('#sv')){$('#sv').innerHTML=SV.map((s,i)=>`<div class="ser rv"><div class="ph"><img loading="lazy" src="${U(s[4],900)}" alt="${s[0]}"></div><div><span class="num">0${i+1}</span><h2 style="margin:.6rem 0 1rem">${s[0]}</h2><p>${s[2]}</p><ul>${s[3].map(x=>`<li>${x}</li>`).join('')}</ul></div></div>`).join('')}
if($('#cf')){const f=$('#cf');const cp=params.get('creator');if(cp)$('#msg').value='I would like to work with @'+cp+'.';
$$('.two a').forEach(a=>a.onclick=e=>{e.preventDefault();$$('.two a').forEach(x=>x.classList.remove('on'));a.classList.add('on');$('#type').value=a.dataset.t;f.scrollIntoView({behavior:'smooth'})});
f.onsubmit=e=>{e.preventDefault();let ok=true;$$('[required]',f).forEach(i=>{const bad=!i.value.trim()||(i.type=='email'&&!/^[^@\s]+@[^@\s]+\.\w+$/.test(i.value));i.setAttribute('aria-invalid',bad);i.nextElementSibling.textContent=bad?(i.type=='email'&&i.value?'Enter a valid email address.':'This field is required.'):'';if(!bad)return;ok=false});
if(ok){f.reset();$('.ok').style.display='block';$('.ok').scrollIntoView({behavior:'smooth',block:'center'})}}}
obs();
/* aksen klik: ring ripple di titik klik + label "KLIK" mengikuti kursor di atas kartu (desktop) */
if(!matchMedia('(prefers-reduced-motion:reduce)').matches){
addEventListener('pointerdown',e=>{['','b'].forEach(c=>{const r=document.createElement('span');r.className='rip '+c;r.style.left=e.clientX+'px';r.style.top=e.clientY+'px';document.body.appendChild(r);setTimeout(()=>r.remove(),900)})});
if(matchMedia('(hover:hover) and (pointer:fine)').matches){const k=document.createElement('div');k.className='ck';k.innerHTML='<i class="cur"></i>KLIK';document.body.appendChild(k);
addEventListener('pointermove',e=>{k.style.left=e.clientX+'px';k.style.top=e.clientY+'px';k.classList.toggle('on',!!e.target.closest('.svc a,.cr,.pj'))},{passive:true});
document.addEventListener('pointerleave',()=>k.classList.remove('on'))}}
