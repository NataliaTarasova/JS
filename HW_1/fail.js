let massage =prompt ("Введите свое имя",0);
alert (`Привет, ${massage}!`)

let num =prompt ("В каком году Вы родились?",0);
const yearNow = 2021;
yearBirth= yearNow-num;
alert (`Вам ${yearBirth} лет!`)

let num =prompt ("Введите длину стороны квадрата:",0) 
perimetr = num*4;
alert (`Периметр квадрата равен ${perimetr}`)

let num =prompt ("Введите радиус окружности:",0) 
const Pi=3.1415;
S = num*num*Pi;
alert (`Площадь окружности равна ${S}`)

let Way =prompt ("Введите расстояние между двумя городами, км:",0) 
let Time =prompt ("Введите время за сколько Вы хотите добраться, ч:",0) 
Speed=Way/Time;
alert (`Вам необходимо двигаться со скоростью ${Speed} км/ч`)

alert=confirm(`Конвертор валют (доллары-евро).`)
let num=prompt ("Введите доллары:",0) 
const valuta = 0.8522;
ConvValuta=num*valuta;
alert=confirm (`${ConvValuta} евро`)

let num=prompt ("Укажите объем флешки в Гб.:",0)
const Memory =1000;
volume=(num*Memory)/820;
alert (`В вашей флешке могут поместиться  ${Math.round (volume)} файл(ы) размером 820Мб`)

let sum=prompt ("Введите оставшуюся сумму денег(руб):",0)
let Price = prompt ("Введите стоимость одной шоколадки (руб):",0)
Amt=sum/Price;
Amount=sum-(Amt*Price);
alert (`Вам хватит денег на ${Math.round (Amt)} шоколадок. Ваша сдача равна  ${ Math.round(Amount)} `)

let num=prompt ("введите трехзначное число:",0)
numOne=(num%1000)/100;
numTwo=(num%100)/10;
numThr=(num%10);
alert(`${(numThr)}${Math.floor(numTwo)}${Math.floor(numOne)}`)

let num=prompt ("введите любое целое число:",0);
let massage = (num%2) ? "нечетное" : "четное";
alert (massage)