let blockArea = document.getElementById('block');      //не могу найти ошибку, при клике данная данная запись работала
let area = null;

blockArea.addEventListener("keydown", (event)=>{         //обработчик событий на блок
  event.preventDefault();

  if (event.ctrlKey && event.key.toLowerCase()==="e"){   //условие при нажатии клавиш реализовать  ф-ию
  editStart();
}

function editStart() {
  area = document.createElement('textarea');              //создается новый элемент,класс,меняется местами при кейдовн
  area.className = 'edit';
  area.value = blockArea.innerHTML;
  blockArea.replaceWith(area);
  area.focus();
  } 
})
