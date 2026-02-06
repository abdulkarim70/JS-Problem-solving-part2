function calcBill (prices, items){


let itemCount={};
for(let item of items){
    if(itemCount.hasOwnProperty(item)){
        itemCount[item]++
    }
    else{
        itemCount[item]=1;
    }
}
let total=0;
for( let item in itemCount){
    let price=prices[item];
    let quantity=itemCount[item]
    let totalPriceWithQuantity=price*quantity
total=total+totalPriceWithQuantity


}
return{total, itemCount
}

}
let output=calcBill({pen:10, book:50}, ['pen', 'pen', 'book', 'pen'])
let output2=calcBill({rice:70, oil:180,egg:12, sugar:90}, ['egg', 'egg', 'rice', 'oil','egg','sugar'])
console.log(output)
console.log(output2)