function mkChart(canvasId, cfg){
  const el = document.getElementById(canvasId);
  if(!el) return null;
  return new Chart(el, cfg);
}