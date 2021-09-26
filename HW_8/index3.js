class CssClass{
   constructor(nameClass, style, tag,item){
       this.nameClass=nameClass;
       this.style=style;
       this.styles={};
       this.elem=tag;
       this.item=item;
   }
  
   styleNew(){
      return this.elem.style.this.item=item;
   }

   styleDel(){
      return this.elem.style.display=" ";
   }
   

  getCss(){
    return `${JSON.stringify(this.style)}`
}
}
let str=new CssClass();
console.log(str);

let computedStyle =getComputedStyle(document.body)
console.log(computedStyle);

let getHtmlDoc = document.getElementsByName("style");
console.log(getHtmlDoc);