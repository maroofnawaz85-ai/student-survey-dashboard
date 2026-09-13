const rendered = new Set();
function showView(name){
  document.querySelectorAll('.view').forEach(v=>v.classList.toggle('active', v.id==='view-'+name));
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.toggle('active', b.dataset.view===name));
  if(!rendered.has(name)){ RENDERERS[name]?.(); rendered.add(name); }
  window.scrollTo(0,0);
}