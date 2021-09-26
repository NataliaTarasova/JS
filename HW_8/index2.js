class HtmlElement{
    constructor(tag,isSelfClosing,text,arrStyle,arrAttribut,arrTag,attribut, item, children,paired){
        this.tag=tag;
        this.isSelfClosing=isSelfClosing;
        this.text=text;
        this.attribut=attribut;
        this.arrAttribut=arrAttribut;
        this.arrStyle=arrStyle;
        this.arrTag=arrTag;
        this.item=item;
        this.children=children;
        this.paired=paired;
    };
        get attribut(){
        return this._attribut;
        }

        set attribut(value){
        this._attribut=value;
        }

        get style(){
        return this._style;
        }

        set style(value){
        this._style=value;
        }

       addItemsInStart(){
           this.item.push();
        };


       addItemsInEnd(){
        this.item.unshift();
       }

       getHtml(){
           if(paired){
               return `<${tag}> ${Object.keys(this.attribut).map((key)=>`${key}=${attribut[key]}`).join(" ")}
               ${children.map((child)=>child.getHtml()).join(" ")}
               </${tag}>`;
           }
           return `<${tag}/>`;
       }
} 

let htmlElem = new HtmlElement();

console.log(htmlElem);

let getHtmlDoc = document.getElementById("wrapper");

console.log(getHtmlDoc);

