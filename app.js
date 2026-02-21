let cash = 20;
let price = 30;
let isStoreOpen = true;
let diff = cash-price

if(cash > price && isStoreOpen){
    console.log(`You paid over. Your change is ${diff}`)
}
else if (cash === price && isStoreOpen){
    console.log("You paid the exact amount, have a nice day!")
}
else if (cash < price && isStoreOpen){
    console.log(`You don't have enough. You need ${diff*-1} more`)
}
else{
    console.log("The store is closed. Come back later")
}

let str = cash >= price && isStoreOpen ? "Give Receipt" : "Dont Give Receipt";

console.log(str);
