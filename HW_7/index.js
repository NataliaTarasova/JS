//задание 1
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
let exemp = "font-size";

function camelize(exemp) {
      return exemp
      .split('-') 
      .map ((word,index)=>index==0 ? word:word[0].toUpperCase()+word.slice(1)) 
      .join ('')   
      };  
alert(camelize(exemp))


//задание 5 
let strNext = "cascading style sheets" ;

function capitalize(strNext){
      return strNext
      .match(/\b(\w)/g) 
      .map ((word,index)=>index==0 ? word[0].toUpperCase():word[0].toUpperCase()) 
      .join ('')  
}

alert (capitalize(strNext))

//задание 6

let strLast="goodlife!"

alert(strLast.repeat(5))

//задание 7  !!! 


//let calc=new Calculator;
//calc.addMethod("+",(a,b)=>a+b);

//let result = calc.addMethod("2+3");
//alert (result)

//задание 8
 
 function wayUrl(url) {
      let match;
      let protocol;
      let domain;
      let way;
      match = url.match(/(?:([^:]+)\:\/\/)?([^/]*)(?:\/(.*))?/);
   
      protocol = match[1];
      domain = match[2];
      way = match[3];
      return "протокол: "+ protocol +"\nдомен: " + domain + "\nпуть: " + way;
  }
  let exempNew=wayUrl("https://itstep.org/ua/about");
  alert (exempNew);
  console.log(wayUrl);

//задание 9
let strOne="10/08/2020";

let strTwo=strOne.split("/");

let strThr=strTwo.join(", ");

alert (strThr);
console.log(strThr); //дублирую вывод  в консоль
<<<<<<< Updated upstream

// задание 10

 
=======
/*
// задание 10 не завершена

let templNew= templ (template,index);

 print.forEach(templNew)=> {
       template.replace( '%', {index}+1);
 };

 print("Today is 1% %2.%3.%4", "Monday",10,8, 2020)
 */
>>>>>>> Stashed changes
