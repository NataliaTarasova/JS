
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