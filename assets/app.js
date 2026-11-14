'use strict';
const norm=s=>String(s).normalize('NFKC').toLowerCase().replace(/\s/g,'');
function match(a,q,p,c){return (!p||a.platforms.includes(p))&&(!c||a.category===c)&&norm([a.name,a.alias,a.publisher,a.summary,...a.features].join(' ')).includes(norm(q));}
if(typeof module!=='undefined')module.exports={match};
if(typeof document!=='undefined'){const $=id=>document.getElementById(id);function render(){let n=0;for(const a of APPS){let show=match(a,$('q').value,$('platform').value,$('category').value);document.querySelector(`[data-id="${a.id}"]`).hidden=!show;n+=show;}$('count').textContent=`${n}개 앱`;$('empty').hidden=n!==0;}for(const id of ['q','platform','category'])$(id).addEventListener('input',render);$('filters').addEventListener('submit',e=>e.preventDefault());$('filters').addEventListener('reset',()=>setTimeout(render));render();}
