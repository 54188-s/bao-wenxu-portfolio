"use strict";
const slides=[
 {src:'assets/work-057.webp',alt:'站在芯上的孩子角色三视图',title:'站在芯上的孩子 · 角色与影像',href:'cases/core.html'},
 {src:'demos/fitfuel/images/case-home.webp',alt:'FitFuel可操作产品首页',title:'FitFuel Pro · 产品原型',href:'demos/fitfuel/case.html'},
 {src:'assets/work-079.webp',alt:'赛博西安古塔与数字光影',title:'赛博西安 · AI城市影像',href:'cases/cyber.html'}
];
let slideIndex=0,swiped=false;
const deck=document.getElementById('deck');
function showSlide(index){
 slideIndex=(index+slides.length)%slides.length;const item=slides[slideIndex];
 document.getElementById('deckImage').src=item.src;document.getElementById('deckImage').alt=item.alt;
 document.getElementById('deckLink').href=item.href;const title=document.getElementById('deckTitle');title.textContent=item.title;title.href=item.href;
 document.getElementById('deckBackLeft').src=slides[(slideIndex+slides.length-1)%slides.length].src;
 document.getElementById('deckBackRight').src=slides[(slideIndex+1)%slides.length].src;
 document.getElementById('deckCount').textContent=`${slideIndex+1} / ${slides.length}`;
}
document.getElementById('deckPrev').onclick=()=>showSlide(slideIndex-1);
document.getElementById('deckNext').onclick=()=>showSlide(slideIndex+1);
deck.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();showSlide(slideIndex+(event.key==='ArrowRight'?1:-1));}});
let drag;
deck.addEventListener('pointerdown',event=>{if(event.button!==0)return;drag={x:event.clientX,y:event.clientY};swiped=false;});
deck.addEventListener('pointermove',event=>{if(!drag)return;const dx=event.clientX-drag.x,dy=event.clientY-drag.y;if(Math.abs(dx)>12&&Math.abs(dx)>Math.abs(dy)){deck.classList.add('dragging');deck.style.setProperty('--drag-x',Math.max(-40,Math.min(40,dx/3))+'px');}});
function finishDrag(event){if(!drag)return;const dx=event.clientX-drag.x,dy=event.clientY-drag.y;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)){showSlide(slideIndex+(dx<0?1:-1));swiped=true;}drag=null;deck.classList.remove('dragging');deck.style.removeProperty('--drag-x');}
deck.addEventListener('pointerup',finishDrag);deck.addEventListener('pointercancel',()=>{drag=null;deck.classList.remove('dragging');deck.style.removeProperty('--drag-x');});
window.addEventListener('pointerup',finishDrag);
deck.addEventListener('click',event=>{if(swiped){event.preventDefault();swiped=false;}},true);
deck.addEventListener('dragstart',event=>event.preventDefault());
const order={product:['fitfuel','core','cyber'],design:['core','cyber','fitfuel']};
function route(name){
 const list=document.getElementById('featuredProjects');order[name].forEach(id=>list.append(document.querySelector(`[data-project="${id}"]`)));
 document.querySelectorAll('[data-route]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.route===name)));
 document.getElementById('routeNote').textContent=name==='product'?'先看可操作流程，再看内容表达。运营方向的真实用户试用仍待进行。':'先看角色与成片，再看产品交互。生成式概念稿放在补充探索中。';
 showSlide(name==='product'?1:0);
}
document.querySelectorAll('[data-route]').forEach(button=>button.onclick=()=>route(button.dataset.route));
// Start with the strongest character visual; the product reading route controls the case order.
const viewer=document.getElementById('viewer');let imageTrigger;
document.querySelectorAll('[data-image]').forEach(button=>button.onclick=()=>{imageTrigger=button;const image=document.getElementById('viewerImage');image.src=button.dataset.image;image.alt=button.dataset.caption;document.getElementById('viewerCaption').textContent=button.dataset.caption;viewer.showModal();});
document.getElementById('viewerClose').onclick=()=>viewer.close();viewer.addEventListener('close',()=>imageTrigger?.focus());
viewer.addEventListener('click',event=>{if(event.target===viewer){const rect=viewer.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)viewer.close();}});
document.querySelectorAll('video').forEach(video=>video.addEventListener('play',()=>document.querySelectorAll('video').forEach(other=>{if(other!==video)other.pause();})));
// Preserve existing résumé and README hash URLs from the previous site.
function handleLegacyHash(){if(location.hash.startsWith('#/')){
 const previous=location.hash.slice(1);
 const destinations={'/works':'#selected','/about':'#about','/project/fitfuel-pro':'demos/fitfuel/case.html','/project/standing-on-the-core':'cases/core.html','/project/cyber-xian':'cases/cyber.html','/project/apple-universe':'demos/apple/index.html','/project/green-glazed-dog':'#gallery','/project/poster-studies':'#gallery'};
 location.replace(destinations[previous]||'#selected');
}}
window.addEventListener('hashchange',handleLegacyHash);handleLegacyHash();
