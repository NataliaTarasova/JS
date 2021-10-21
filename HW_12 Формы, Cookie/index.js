let nameColor=document.getElementById("color");

let nameColorRegExp=/[A-Za-z]/gim;

nameColor.addEventListener("input", (event)=>{

   const nameError=document.getElementById("colorError");

   if (!nameColorRegExp.test(event.target.value)){

      nameError.innerText="Color can only contain letters";

      console.log(event.target.value);

      return;
   }
   nameError.innerText=" ";
})


let codeColor=document.getElementById("code");

const codeRgbRegExp=/[0-9]{3}, [0-9]{3}, [0-9]{3}/gim;
const codeRgbaRegExp=/[0-9]{3}, [0-9]{3}, [0-9]{3}, [0-1]{1}/gim;
const codeHexRegExp=/#[A-Z0-9]{6}/gim;

let type=document.querySelectorAll("option");

codeColor.addEventListener("form", (event)=>{
   
   const codeError=document.getElementById("codeError");

if (type="RGB" &&!codeRgbRegExp.test(event.target.value)){

   codeError.innerText="RGB code must match the pattern [0-255], [0-255], [0-255]";

   console.log(event.target.value);

   return;
 };

 event.preventDefault();

if (type="RGBA" &&!codeRgbaRegExp.test(event.target.value)){

   codeError.innerText="RGBA code must match the pattern [0-255], [0-255], [0-255], [0-1]";

   console.log(event.target.value);

   return;
 }

 else {

   codeError.innerText="HEX code must match the pattern # 6 number or letters";

   console.log(event.target.value);

   return;
 };
}) 


let form=document.querySelector("form");

let button=document.getElementById("button");
/*
button.addEventListener('click', (event)=>{
  event.currentTarget.innerText;
  createDiv();
});*/

button.addEventListener('click',{
   handleEvent(event){
    event.currentTarget.innerText;
  createDiv();
   }
})

function createDiv(){

let divNew=document.createElement('div');
console.log(divNew);

divNew.classList.add('block');

divNew.style.backgroundColor=nameColor;

divNew.innerText;

form.appendChild(divNew);
}



/*
button.addEventListener("form", (event)=>{

let divNew=document.createElement('div');

divNew.classList.add=("block");

divNew.style.backgroundColor=nameColor;

divNew.innerText;

form.appendChild(divNew);

console.log(event.target.value);

});*/


let date=(new Date(Date.now()+86400*1000)).toUTCString();

document.cookie="test_name=Js cookie installation"; expires=" + date";