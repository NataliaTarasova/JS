
document.addEventListener('click', function (event){
  let id = event.target.dataset.toggleId;
  if (!id) return;
  let elem = document.getElementById(id);
  elem.hidden=!elem.hidden;
})

document.getElementById('hider').onclick = function() {
  document.getElementById('open').hidden = true;
}