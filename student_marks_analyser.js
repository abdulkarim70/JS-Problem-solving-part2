function analyseMarks(marksObj){
     let total=0
let highestMarks= -Infinity;
let lowestMarks= Infinity;
let highestSubject=null;
let lowestSubjest=null;

        for(let subject in marksObj){   
              let mark=marksObj[subject]    
                 total=total+mark
                 if(mark>highestMarks){
                  highestMarks=mark;
                  highestSubject=subject;
                 }
                 if(mark<lowestMarks){
                  lowestMarks=mark;
                  lowestSubjest=subject;
                 }
            } 
            console.log('highest Marks',':',highestMarks)  
            console.log('lowest Marks', ':',lowestMarks)  
            console.log('highest subject', highestSubject)
            console.log('lowest marks', lowestSubjest)
            let average=total/Object.keys(marksObj).length;
            console.log(average)
            return{total, average, highestSubject, lowestSubjest}
}

let output=analyseMarks({math:78,english:65,physics:88,bangla:55});
console.log(output)
