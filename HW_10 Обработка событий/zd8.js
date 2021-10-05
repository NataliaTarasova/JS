let block = document.getElementById('block');
let area = null;

block.onclick = function() {
  editStart();
};

function editStart() {
  area = document.createElement('textarea');
  area.className = 'edit';
  area.value = block.innerHTML;
  block.replaceWith(area);
  area.focus();
}