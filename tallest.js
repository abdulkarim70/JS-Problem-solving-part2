const height =[65,66,68,72,78,60,65,66];
// const h2= Math.max(...height)
// console.log(h2) এভাবেও ম্যাক্স বের করা যায়

function getMax (numbers){
let max = numbers[0]
    for( const number of numbers){
        
        if(number>max){
            max=number;
        }
    }
return max
}
const max =getMax(height);
console.log(max)