let run = lane.querySelector('.runner');

run.onmousedown = function(event){
event.preventDefault();  

let shiftX = event.clientX - run.getBoundingClientRect().left;
document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mouseup', onMouseUp);

      function onMouseMove(event) {
        let newLeft = event.clientX - shiftX - lane.getBoundingClientRect().left;

        if (newLeft < 0) {
          newLeft = 0;
        }
        let rightEdge = lane.offsetWidth - run.offsetWidth;
        if (newLeft > rightEdge) {
          newLeft = rightEdge;
        }

        run.style.left = newLeft + 'px';
      }

      function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
      }

    };

    run.ondragstart = function() {
      return false;      
}