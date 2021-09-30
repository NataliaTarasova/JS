// через версию DOM
document.getElementById('hiden').onclick = function() {
    document.getElementById('text').hidden = true;
  }

document.getElementById('open').onclick = function() {
   return document.getElementById('text');
} 