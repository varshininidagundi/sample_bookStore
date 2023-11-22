var readline = require("readline-sync")
let list1=[ {
        "name": "Nation Calling''",
        "price": 700,
        "status": "available",
        "quantity": 16
    }
]
let cart = [];
console.log(  'operations need to be performed in book store -->\n 1) show available books to users\n 2) add book\n 3) show cart\n 4) EXIT__________')
let input = readline.question("enter the input");
input == 1?showBooks():
input == 2?addBook():showcart()
function displayMenu(){
    console.log(  'operations need to be performed in book store -->\n 1) show available books to users\n 2) add book\n 3) show cart\n 4) EXIT__________')
let input = readline.question("enter the input");
input == 1?showBooks():
input == 2?addBook():showcart()
}
function showBooks(){
console.log("showbook");
console.log(0,list1[0].name,list1[0].quantity);
displayMenu();
}
function showcart(){
    console.log(cart);
console.log('showcart');

displayMenu();
}
function addBook(){
    var index = readline.question("enter the index of book")
    var dummy = list1[index];
    cart.push(dummy)
    console.log(cart);
    // for(let bookindex in list1){
    //     if(index == bookindex){
    //         list1[index].quantity =0;
    //     }
    // }
    let filterd = list1.map((book,bookindex) => {if(index == bookindex){
        list1[index].quantity =0;
    }
    return book;
    });
    console.log(filterd);
    list1=filterd;
console.log("addbook");

displayMenu();
}