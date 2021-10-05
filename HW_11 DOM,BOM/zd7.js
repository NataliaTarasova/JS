ol.onclick = function(event) {
    if (event.target.tagName != "LI") return;

    if (event.ctrlKey || event.metaKey) {
      toggleSelect(event.target);
    } else {
      singleSelect(event.target);
    }

  }

  function toggleSelect(li) {
    li.classList.toggle('highlight');
  }

  function singleSelect(li) {
    let highlight = ul.querySelectorAll('.highlight');
    for(let elem of highlight) {
      elem.classList.remove('highlight');
    }
    li.classList.add('selected');
  }