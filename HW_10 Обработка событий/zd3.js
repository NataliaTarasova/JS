pole.onclick = function(event) {

    let poleCoords = this.getBoundingClientRect();

    let ballCoords = {
      top: event.clientY - poleCoords.top - pole.clientTop - ball.clientHeight / 2,
      left: event.clientX - poleCoords.left - pole.clientLeft - ball.clientWidth / 2
    };

    if (ballCoords.top < 0) ballCoords.top = 0;

    if (ballCoords.left < 0) ballCoords.left = 0;

    if (ballCoords.left + ball.clientWidth > pole.clientWidth) {
      ballCoords.left = pole.clientWidth - ball.clientWidth;
    }

    if (ballCoords.top + ball.clientHeight > pole.clientHeight) {
      ballCoords.top = pole.clientHeight - ball.clientHeight;
    }

    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';
  }