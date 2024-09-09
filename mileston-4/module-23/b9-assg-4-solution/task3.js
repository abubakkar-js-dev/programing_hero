const mixedElement = [NaN,1,12,0,-1,undefined];

function deleteInvalids(array){
    if(Array.isArray(array) === false){
        return 'Invalid Array';
    }
    let newNumbersArray = [];
    for(let element of array){
        if(typeof element === 'number' && Number.isNaN(element) === false){
            newNumbersArray.push(element);
        }
    }
    return newNumbersArray;
}

// program testing

console.log(deleteInvalids(mixedElement));
console.log(deleteInvalids([1,null,undefined,18,-19,NaN,"12",[1,2],{obg: "lala"}]));
console.log(deleteInvalids(["1",{num: 2},NaN]));
console.log(deleteInvalids([1,2,-3]));
console.log(deleteInvalids({num: [1,2,3]}));