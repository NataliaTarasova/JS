
//Задание 1.1
let car ={
  manufacturer:"Mercedes",
  model:"GLC",
  yearOfIssue:2020,
  averageSpeed:120,
  distance:420,
}

function ShowTime(distance,averageSpeed){
  return {distance:distance, averageSpeed:averageSpeed}
}

let roud=ShowTime(420);
let speed=ShowTime(120);

function ShowTimeInRoud(distance,averageSpeed){
 
let result =car.distance/car.averageSpeed;
 
alert (result);
}

ShowTimeInRoud(roud,speed);


//задание 2

let obj1 = {
  numeric:2,
  denominator:4,
}

let obj2 = {
  numeric:1,
  denominator:3,
}

function Grit(numeric,denominator){
  return {numeric:numeric, denominator:denominator}
}

let gritOne=Grit(2,4);
let gritTwo=Grit(1,3);

// умножение дробей
function multiGrit(obj1,obj2){
 
 let resultNumeric =obj1.numeric * obj2.numeric;
 let resultDenominator= obj1.denominator * obj2.denominator;
 alert (`умножение дробей = ${resultNumeric} / ${resultDenominator}`);
}
multiGrit(gritOne,gritTwo);

function Grit(numeric,denominator){
  return {numeric:numeric, denominator:denominator}
}

// сумма дробей
function sumGrit(obj1,obj2){
 
 let resultNumeric =(obj1.numeric*obj2.denominator) + (obj2.numeric*obj1.denominator);
 let resultDenominator= obj1.denominator * obj2.denominator;
 alert (`сумма дробей = ${resultNumeric} / ${resultDenominator}`);
}
sumGrit(gritOne,gritTwo);

// вычитание
function dedGrit(obj1,obj2){
 
  let resultNumeric =(obj1.numeric*obj2.denominator) - (obj2.numeric*obj1.denominator);
  let resultDenominator= obj1.denominator * obj2.denominator;
  alert (`вычитание = ${resultNumeric} / ${resultDenominator}`);
 }
 dedGrit(gritOne,gritTwo);

 //деление
 function divGrit(obj1,obj2){
 
  let resultNumeric =obj1.numeric * obj2.denominator;
  let resultDenominator= obj1.denominator * obj2.numeric;
  alert (` деление = ${resultNumeric} / ${resultDenominator}`);
 }
 divGrit(gritOne,gritTwo);

 // сокращение
 let resultGritOne =Math.round( obj1.numeric/obj1.denominator);
 let resultGritTwo= Math.round (obj2.numeric/obj2.denominator);
 alert (`${resultGritOne}, ${resultGritTwo}`)

 // задание 3.1

 let time ={
   hour:12,
   minute:30,
   second:40,
   interval:30,
 }

function showTime(hour,minute,second){
  return `${hour}:${minute}:${second}`;
     }

    let newFunction= showTime(12,30,40);

   // let showTimeTwo = ()=>{
//}

alert(`${newFunction}`)

function showTime(hour,minute,second){
return `${hour}:${minute}:${second}`;
}
    
let  timePluseSec = (hour,minute,second)=>{
let interval=40;
let plusSec= (second+interval)%60;
let plusMin=(minute+Math.floor((second+interval)/60));
return `${hour}:${plusMin}:${plusSec}`
}

let timeNewWhitSec=timePluseSec(12,10,40);
   
alert (`исходное время 12:10:40, при увелечении на 40 секунд ${timeNewWhitSec}`) // при увелечении секунд

let  timePluseMin = (hour,minute,second)=>{
let interval=40;
let plusMin= (minute+interval)%60;
let plusHour=(hour+Math.floor((minute+interval)/60));
return `${plusHour}:${plusMin}:${second}`
}

let timeNewWhitMin=timePluseMin(12,30,40);

   
alert (`исходное время 12:10:40, при увелечении 40 минут ${timeNewWhitMin}`) // при увелечении минут

let  timePluseHour = (hour,minute,second)=>{
let interval=6;
let plusHour= (hour+interval)%24;
return `${plusHour}:${minute}:${second}`
}

let timeNewWhitHour=timePluseHour(22,30,40);
 
alert (`исходное время 12:10:40, при увелечении на 6 часов ${timeNewWhitHour}`) // при увелечении часов