
//задание 1 (не выходит сумма)

let numBegin = prompt("Начало диапозона",0)
let numFinish = prompt("Конец диапозона",0)
let sum=0;
for (let i=numBegin; i<numFinish; )
{
    if (i<numFinish){
    sum+=i;
    i++}
}
alert (`${sum}`)

//задание 2
let numb1 = prompt('Введите первое число');
let numb2 = prompt('Введите второе число');
while (numb1!=0 &&numb2!=0){
    if (numb1>numb2){
        numb1=numb1%numb2;}
        else{
            numb2=numb2%numb1;
        }
}
alert (`Наибольший делитель равен ${numb1+numb2}`)



//задание 3 (выходят, но не одной строкой)
let num = prompt('Введите число');
for (let i = 1; i <= num; i++)
{
    if (num % i == 0)
    {
        alert (`Все делители данного числа равны: ` + i);
    }
}

//задание 4
let num = prompt('Введите число');
let count=0;
for (let i=0; i<num.length; i++)
{
   count +=1;
}
alert(`${count}`);

//задание 5

let even=0;
let odd=0;
let zero=0;
let plus=0;
let minus=0;

for (let i=1; i<=10;i++){
    let num = prompt('Введите число');
    if (num>0){
        plus++;
    }
    if (num<0){
        minus++;
    }
    if (num==0){
        zero ++;
    }
   if (num%2==0){
        even++;
    }
    if (num%2!==0){
        odd++;
    }
}
alert(`Количество четных чисел ${even}, нечетных ${odd}, нулей ${zero}, положительных ${plus} и отрицательных ${minus}`)


//задание 6
do{
let numOne = prompt('Введите первое число');
let numSec = prompt('Введите второе число');
let action = prompt('Укажите действие с числами симоволом: ');
let answer= eval(`${numOne}${action}${numSec}`)
alert (`Результат ${answer}`);
}
while (confirm ('Продолжим?'))

// задание 7

do{
    let num = prompt ('Введите число');
let embed = prompt ('и на сколько его сдвинуть');
alert (num.slice(embed)+num.slice(0,embed))
}
while (confirm);

// задание 8

// задание 9
let tableSub =[];
for (let i=2; i<=9;i++){
    tableSub.push(`\n`)
    for (let j=1; j<=10; j++){
        tableSub.push(`${i}*${j}=${i*j}\n`);
    } 
}
alert (tableSub.join(''));
/*
// задание 10 ( не совсем поняла задание)
let num = prompt ('Загадайте число от 1 до 100');
let lowerLimit=0;
let upperLimit=100;
while (num!==num){
    let answer= prompt (`Ваше число >,<,= ${num}?`, '>,<,=');
    if (answer== '>')

}
*/