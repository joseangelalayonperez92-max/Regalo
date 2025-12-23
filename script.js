// JS mínimo para avanzar escenas
function showScene(id){
  document.querySelectorAll('.scene').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function checkWord(){
  const w = document.getElementById('word').value.trim();
  if(w) showScene('scene2');
  else alert('Escribe una palabra');
}

function checkDate(){
  const d = document.getElementById('date').value.trim();
  if(d) showScene('scene3');
  else alert('Escribe una fecha');
}
