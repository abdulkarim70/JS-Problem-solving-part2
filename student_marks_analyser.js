function analyseMarks(marksObj){
     let total=0
        for(let key in marksObj){   
              let value=marksObj[key]    
                 total=total+value
            }   
            let average=total/Object.keys(marksObj).length;
            console.log(average)
            return{total, average}
}

let output=analyseMarks({math:78,english:65,physics:88,bangla:55});
console.log(output)
