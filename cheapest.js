const phones=[
    {name:'Samsumg', price:20000, camera:'12mp', color:"black"},
    
    {name:'Xiami', price:18000, camera:'12mp', color:"black"},
    
    {name:'Oppo', price:30000, camera:'12mp', color:"black"},
    
    {name:'iphone', price:100000, camera:'12mp', color:"black"},
    
    {name:'walton', price:31000, camera:'12mp', color:"black"},
    
    {name:'HTC', price:2000, camera:'12mp', color:"black"},
    
]
function getCheapestPhone(phones){
    let min= phones[0]
    for(const phone of phones){
        if(phone.price<min.price){
            min=phone
        }
    }
return min;
}
const cheap =getCheapestPhone(phones)
console.log(cheap)