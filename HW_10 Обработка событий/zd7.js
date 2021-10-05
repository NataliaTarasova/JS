let links = document.querySelectorAll('li');

for (let li of links) {
    let click = document.createElement('click');
    li.prepend(click);
    click.append(click.nextSibling); 
  }

  link.onclick = function(event) {

    if (event.target.tagName != 'click') {
      return;
    }

    let childrenContainer = event.target.parentNode.querySelector("ul");
    if (!childrenContainer) return; 

    childrenContainer.hidden = !childrenContainer.hidden;
  }

