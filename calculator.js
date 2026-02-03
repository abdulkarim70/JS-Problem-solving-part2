function add(num1,num2){
    return num1+num2;
}
function substruct(num1,num2){
    return num1-num2;
}
function multiply (num1, num2){
    return num1*num2;
}
function division (num1, num2){
    return num1 /num2;
}
function calculator (a,b, operation){
    if(operation==='add'){
        const result=add(a,b);
        return result
    }
else if(operation==="substruct"){
    const result=substruct(a,b);
    return result
}
else if(operation==="multiply"){
    const result= multiply(a,b);
    return multiply(a,b);
}
else if(operation==='division'){
    
    return division(a,b);
}

else{
   return "only 'add', 'substruct', 'multiply', 'divide', operation allowed"
}
}
const result=calculator(5,7,'division');
console.log(result);