/// this is conceptual session
function wordFrequency(sentence){
     let words = sentence.split(" ");
    let wordscount ={};
   for(let word of words){
    let wordLowerCase=word.toLowerCase();
   if(wordscount.hasOwnProperty(wordLowerCase)){
    wordscount[wordLowerCase]++
   }
   else{
    wordscount[wordLowerCase]=1;
   }
   }
 return wordscount;

}
let output=wordFrequency("I love JS and I love coding and JS is fun Fun")
console.log(output)