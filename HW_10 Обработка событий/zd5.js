
/*
ol.onclick = function(event) {
    if (event.target.tagName != "li") return;
}

function toggleSelect(li) {
    li.classList.toggle('highlight');
  }

  function singleSelect(li) {
    let highlight = ol.querySelectorAll('.highlight');
    for(let elem of highlight) {
      elem.classList.remove('highlight');
    }
    li.classList.add('highlight');
  }

 let click = document.querySelectorAll('li');
 click.onclick=function(event){
  let target=event.target.closest('li');
  highlight(target);
 } 

 function highlight(li){
   click.classList.add('highlight')
 }

 click.onclick = function(event) {
  if (event.target.tagName != "li") return;
}

function toggleSelect(li) {
  li.classList.toggle('highlight');
}

let click = document.querySelectorAll('li');

click.onclick = function(event) {
 (event.target.tagName != "li") return;
  click.classList.add('highlight')}

ol.onclick = function(event) {
  if (event.target.tagName != "LI") return;}

  function toggleSelect(li) {
    li.classList.toggle('highlight');
  }

  function singleSelect(li) {
    let link = ol.querySelectorAll('.highlight');
    for(let elem of link) {
      elem.classList.remove('highlight');
    }
    li.classList.add('highlight');
  }*/

  let click = document.querySelector('li');

  click.onclick=function(event){
   let target=event.target;
   target.style.background='orange';
  } 
 
  /*function highlight(target){
    target.classList.add('highlight')
  }
 
  click.onclick = function(event) {
   if (event.target.tagName != "li") return;
 }*/