"use strict";
document.addEventListener('DOMContentLoaded',()=>{FitUI.init();const page=document.body.dataset.page;FitPages[page]?.();window.addEventListener('storage',e=>{if(e.key?.startsWith('fitfuel_')){const active=document.activeElement;if(!active?.matches('input,select'))FitPages[page]?.()}})});
