const buttons=[...document.querySelectorAll('[data-filter]')];
const search=document.querySelector('#search');
let mode='all';
function filter(){let count=0;document.querySelectorAll('[data-role]').forEach(el=>{const show=(mode==='all'||el.dataset.role===mode)&&el.textContent.toLowerCase().includes((search?.value||'').toLowerCase());el.hidden=!show;if(show)count++});const empty=document.querySelector('#empty');if(empty)empty.hidden=count>0;const status=document.querySelector('#result-count');if(status)status.textContent=count;}
buttons.forEach(b=>b.addEventListener('click',()=>{mode=b.dataset.filter;buttons.forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b))});filter()}));
search?.addEventListener('input',filter);
