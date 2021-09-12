
//задание 1
let age = prompt('Укажите свой возраст', 0);
if (age < 12) {
    message = 'Вы малыш!';
  } 
  else if (age < 18) {
    message = 'Вы подросток!';
  } 
  else if (age < 60) {
    message = 'Вы взрослый человек!';
  }
   else if (age < 120){
    message = 'Вы пенсионер!';
  }
  alert ( message);

  //задание 2
let arg = prompt("Введите число",0);  
switch (arg) {
    case '1':
      alert( '!' );
      break;
    case '2':
      alert( '@' );
      break;
    case '3':
      alert( '#' );
      break;
    case '4':
      alert( '$' );
        break;
    case '5':
      alert( '%' );
      break;  
    case '6':
      alert( '^' );
      break; 
    case '7':
        alert( '&' );
        break;
    case '8':
        alert( '*' );
        break;
    case '9':
        alert( '(' );    
        break;
}

//задание 3 (не могу найти ошибку)
let num = prompt("Введите трехзначное число",0); 
let num_1 = num/100;
let num_2 = num/10 % 10;
let num_3 = num % 10;
let result = (num_1==num_2) ? (`Повтор число ${num_2}`) : (num_2==num_3) 
                            ? (`Повтор число ${num_1}`) : (num_1==num_3) 
                            ? (`Повтор число ${num_3}`) : ('одинаковых чисел нет');
alert (result)

//задание 4
let year = prompt("Введите год",0); 
let yearLeap=year%4;
if (yearLeap==0){
  alert ("Это високосный год")
}
else {
  alert ("Не високосный год")
}

//задание 5
let num = prompt("Введите пятизначное число",0); 
let num_1 = (num/10000);
let num_2 = (num/1000 %10);
let num_3 = (num/100 %10);
let num_4 = (num/10 %10);
let num_5 = (num % 10);
let message = Math.round(num_1==num_5) && Math.round(num_2==num_4) ? "Число является палиндромом" : "Попробуйте указать другие параметры";
alert (message);

//задание 6 (конвертов валют - как в диалоговом окне дать выбор в какую конвер-ть?)


//задание 7
let sum = prompt("Введите сумму покупки",0); 

if (sum<200){
  alert (`Скидки нет`)  ;
  }

if (sum>200){
sumDiscont=sum*0.97;
alert (`Сумма со скидкой равна ${sumDiscont}`)  ;
}

if (sum>300){
  sumDiscont=sum*0.95;
  alert (`Сумма со скидкой равна ${sumDiscont}`)  ;
}

if (sum>500){
  sumDiscont=sum*0.93;
  alert (`Сумма со скидкой равна ${sumDiscont}`)  ;
}

//задание 8
let lengthCircum = prompt("Укажите длину окружности",0); 
let PerimeterSquare = prompt("Укажите периметр квадрата",0); 
message= lengthCircum < (PerimeterSquare/4) ? "окружность помещается" :" попробуйте указать другие параметры";
alert (message);

//задание 9 (тоже не поняла как совместить выбор варианта)

//задание 10


