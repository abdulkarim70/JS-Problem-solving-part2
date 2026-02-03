const numbers=[]

const products =[
    { name:'shampoo', price:300 },
    { name:'chiruni', price:100 },
    { name:'shirt', price:700 },
    { name:'pant', price:1200 },
]
function getShopingTotal(Products){
    let sum=0;
for(const product of products){
   sum=sum+product.price
}
return sum
}
const total =getShopingTotal(products)
console.log(total)