let blockArea = document.getElementById('block');
let area = null;

block.onclick = function(event) {
  if (event.target.tagName != "blockArea") return;

  if (event.ctrlKey && event.key.toLowerCase()==="e"){
    editStart(event.target);
  } 

function editStart() {
  area = document.createElement('textarea');
  area.className = 'edit';
  area.value = blockArea.innerHTML;
  blockArea.replaceWith(area);
  area.focus();
  } 
}
/*
document.addEventListener("keydown", (event)=>{
  event.preventDefault();

  //console.log(event.key);

  if (event.ctrlKey && event.key.toLowerCase()==="e");
 // console.log("Edit");
})
*/