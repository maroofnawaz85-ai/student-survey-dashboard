function sizeWrap(id, n, per=26, pad=60){
  const w = document.getElementById(id);
  if(w) w.style.height = (n*per+pad)+'px';
}