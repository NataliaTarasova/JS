/*
//задание 1
let numBegin = prompt("Начало диапозона",0)
let numFinish = prompt("Конец диапозона",0)

let sum=0;
for (let i=numBegin; i<numFinish; i++)
{
    if (i==numFinish)
           break;
    sum+=i;
}
alert (sum)

//задание 2
let numb1 = prompt('Введите первое число');
let numb2 = prompt('Введите второе число');

*/
//задание 3 (выходят, но не одной строкой)
let num = prompt('Введите число');
for (let i = 1; i <= num; i++)
{
    if (num % i == 0)
    {
        alert (`Все делители данного числа равны: ` + i);
    }
}
