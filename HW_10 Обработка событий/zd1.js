//пока не поняла в чем ошибка
    const inputError = document.getElementById("inputId")

    inputError.addEventListener ("inputId", (event)=>{
      if (!inputId.includes('/^[0-9]$/i)')) { 
        error.innerText = 'Пожалуйста, введите правильно имя';
      }
    }); 

