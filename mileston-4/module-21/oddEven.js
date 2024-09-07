function isEven(num){
    if(num % 2 === 0){
        return true;
    }
    return false;
}

let EvenNumber = isEven(41);
console.log("EvenNumber: ",EvenNumber);