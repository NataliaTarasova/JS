
//задание 1
function getRes(a,b){
    if (a>b)
    return +1;
    else if (a<b)
    return -1;
    else (a==b)
    return 0;
}
console.log (getRes(6,3))
console.log (getRes(1,3))
console.log (getRes(3,3))

//задание 2

function getFactorial(num){
    return (num != 1) ? num * getFactorial(num - 1) : 1;
}
console.log (getFactorial(5))

//задание 3
function showResult(a,b,c){
    if (a>0,b>0,c>0){
    alert(a+''+b+''+c);
}
}
console.log (showResult(4,5,6))

//задание 4 (площадь квадрата не выходит?)
function calcFormul(width,length){
   if (width!=0 && length!=0){
        return 2*(width+length)
    }
 else if (width===length) {
       return width* length
    }
}
console.log(calcFormul(2,4))
console.log(calcFormul(5))

//задание 5
function showNumberPerfect(numb){
let sum =0;

for (let i=1; i<numb; i++){
    if(!(numb%i)){
    sum+=i;
    }
  } 
  console.log(sum==numb);
}
showNumberPerfect(4);
showNumberPerfect(12);
showNumberPerfect(20);
showNumberPerfect(6);


//задание 6 (не доделана задачка)
const arr =[];
let sum =0; 
function showNumberPerfectMinMax (arr =[]){
    maxArr=Math.max(...arr);
    minArr= Math.min(...arr);
    for (let i=1; i>10000; i++){
        if(!(maxArr%i)||!(minArr%i)){
            sum+=i;
            }
        } 
    console.log (maxArr==minArr==sum)
}

showNumberPerfectMinMax(arr[10,36,12,56,1000])

//задание 7

for (let i=1;i<3600;i++){
function setTime (hours){
    return function setMinutes (minutes=00){
      return function setSeconds (seconds=00){
        return `${hours}:${minutes}:${seconds}`
        }
    }
}
}
let time=setTime(12)()();      
console.log (time)
 
//задание 8 (не доделала, не выходит в сек)

 /*function setTime (hours){
        return function setMinutes (minutes=00){
          return function setSeconds (seconds=00){
            return `${hours}:${minutes}:${seconds}`
            }
        }
    }

let time=setTime(24)()(); 

console.log (time())*/

    function setTimeInSecond (){
                return (hours*3600)+(minutes*60)+(seconds)
            }

let timeNew=setTimeInSecond(10)()();

console.log (timeNew())

