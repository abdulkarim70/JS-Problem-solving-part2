function checkPassword(password){
    let reasons =[];
let length = password.length;
let hasUpperCase=false;
let hasNumber=false;
let hasSpace=password.includes(" ")
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
if(hasSpace==true){
    reasons.push('space found')
}
let isValid= reasons.length==0;

return{
    valid: isValid,
    reasons
};
}
let output =checkPassword('helloWorld2');
let output2 =checkPassword('hello123');
console.log(output,)