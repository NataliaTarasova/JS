/*//задание 1
let str = "sdfAS*fs_AFgb!d1232b3b2j3b5b23hb5";
alert(str.match(/\d+/g).join('').length); //кол-во цифр
alert (str.match(/[a-z]/gi).join('').length); // кол-во букв
alert (str.match(/[ \ ^ $ . _ ! & | ? * + ( )]/g).join('').length); // кол-во букв

// задание 3
let str1 = 'Hi world!';
let str2 = 'GOODBYI!';
alert (str1.toUpperCase()); 
console.log(str1);
alert (str2.toLowerCase()); 
console.log(str2);

let str3='123456789'
alert( str3.replace(/\w/g,'_'));
console.log(str3)

//задание 4 
let str = "font-size";

function camelize(str) {
      return str
      .split('-') 
      .map ((word,index)=>index==0 ? word:word[0].toUpperCase()+word.slice(1)) 
      .join ('')   
      };  
alert(camelize(str))


//задание 5 
let str = "cascading style sheets" ;

function capitalize(str){
      return str
      .match(/\b(\w)/g) 
      .map ((word,index)=>index==0 ? word[0].toUpperCase():word[0].toUpperCase()) 
      .join ('')  
}

alert (capitalize(str))

//задание 6

let str="goodlife!"

function repeatStr (str,n){
let strNew='';
while(n-->0) strNew+=str;
return strNew;
}

alert(repeatStr(str,5))

//задание 7  !!!


let calc=new Calculator;
calc.addMethod("+",(a,b)=>a+b);

let result = calc.calculate("2+3");
alert (result)

//задание 9
 //let str="10/08/2020"

 */
 
