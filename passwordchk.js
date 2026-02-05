function checkPassword(password){
    let reasons =[];
let length = password.length;
let hasUpperCase=false;
let hasNumber=false;
for(let i=0;i<length;i++){
    let character = password[i]
   if(character>='0' && character<='9'){
    hasNumber=true;
   }
   if(character>="A" && character<="Z"){
    hasUpperCase=true;
   }
}
if(!hasNumber){
    reasons.push('Missing Number');
}
if(!hasUpperCase){
    reasons.push('Missing Upper Case')
}
console.log(password.includes(' '))

return{
    valid: true,
    reasons
};
}
let output =checkPassword('helloWorld');
let output2 =checkPassword('hello123');
console.log(output,)