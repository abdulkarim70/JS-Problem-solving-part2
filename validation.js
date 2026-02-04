function multiply (num1, num2){
    if(typeof num1 !=='number'|| typeof num2 !=='number'){
        return 'please provide a number'
    }
    const mult =num1*num2;
    return mult;
}
const result=multiply('5','seven')
console.log(result);

function fullName(first, second){
    if(typeof first!=='string' || typeof second!=='string'){
        return "Please input text only"
    }
const full =first+" "+second;
return full
}
const full =fullName(2, "Karim");
console.log(full)

function getPrice (product){
    const price = product.price;
    return price
}
const price = getPrice({name:'Chokolet',price: 35,color:"green",})
console.log(price)