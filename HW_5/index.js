let car ={
  manufacturer:"Mercedes",
  model:"GLC",
  yearOfIssue:2020,
  averageSpeed:120,
}
console.log(car)


let distance=prompt('Введите расстояние',0)

let averageSpeed=120;

function ShowTime(averageSpeed, distance){

if (distance<480){
    let timeInDistance= Math.floor( Number(distance)/Number(averageSpeed));
     alert(`${timeInDistance}`);
     return true;
}
else{
    let hour=1;
    alert(`${timeInDistance}+${hour}`); //пробовала по разному,но все на этой строке выдает ошибку, пока не разобралась
   }
}
ShowTime()