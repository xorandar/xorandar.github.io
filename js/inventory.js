class Inventory{
    constructor(){
        this.items = [];
    }
    
    addItem(i){
        this.items.push(i);
    }
    
    removeItem(id){
        for(var item in this.items){
            if(this.items[item].id == id){
                this.items.splice(item,1)
            }
        }
    }
    
    transferItems(recipient,sender){
        recipient.items = recipient.items.concat(sender.items);
    }
    
    flushItems(){
        this.items = [];
    }
    
    examineItem(){
        
    }
    
    useItem(){
        
    }
    
}

var Items = [
    {
        id : "Wooden Sword",
        mag: 5,
        desc: "You call it a sword, others call it a stick..",
        val: 2
    },    
    {
        id : "Weak Health Potion",
        mag: 10,
        desc: "..Of course its red, but it smells bad too and looks cloudy.",
        val: 5,
    }
]

var Moves = [
    {
        id: "Tackle",
        dmg: "5"
    },
    {
        id: "Slice",
        dmg: "8"
    },
    {
        id: "Throw Rock",
        dmg: "3"
    },
    {
        id: "Kick",
        dmg: "7"
    }
]