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


const form = document.getElementById("form");

const colorBlocksContainer = document.getElementById("colorBlocksContainer");

form.addEventListener("submit", (event)=>{
   event.preventDefault();

   const colorValue = event.target.color.value;
   const typeValue = event.target.type.value;
   const codeValue = event.target.code.value

   createDiv(colorValue, typeValue, codeValue, colorBlocksContainer);
   
   return
});

function createDiv(color, type,  code, parent){

   const divNew = document.createElement('div');
   
   divNew.classList.add('block');
   divNew.style.backgroundColor=color;
   
   divNew.innerHTML = `<p>${color}</p><p>${type}</p><p>${code}</p>`;
  
   
   parent.insertAdjacentElement("beforeend", divNew);
   }

let date=(new Date(Date.now()+10800*1000)).toUTCString();

document.cookie="test_name=Js cookie installation"; expires=" + date";