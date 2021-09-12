

let shoppingList=[
    {   
        id:1,
        nameProduct:'milk',
        count:1,
        bought:'yes',
    },
    
   {
        id:2,
        nameProduct:'bread',
        count:1,
        bought:'no',
    },
    
   {
        id:3,
        nameProduct:'chicken',
        count:2,
        bought:'yes',
    },
    
   {
       id:4,
        nameProduct:'fish',
        count:1,
        bought:'no',
    }


];

let listYes =shoppingList.filter(shoppingList=>shoppingList.bought=='yes');
let listNo =shoppingList.filter(shoppingList=>shoppingList.bought=='no');
console.log (listNo);
console.log (listYes);



let listPush= function listPushNew(){
    if (nameProduct=this.nameProduct){
        return count+this.count
    };
}


let listPushNew = function(){
    if (shoppingList.bought=='yes')
    return shoppingList.nameProduct;
}

listPushNew();
console.log(listPushNew)