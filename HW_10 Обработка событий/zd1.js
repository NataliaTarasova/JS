input.onblur = function() {
    if (!input.value.includes('@')) { // не email
      input.classList.add('invalid');
      error.innerHTML = 'Пожалуйста, введите правильный email.'
    }
  };