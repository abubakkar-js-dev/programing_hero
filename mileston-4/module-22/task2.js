const numbers = [5,6,11,5,12,98,5];

function countSpecificNumber(numbers,find){
    let count = 0;
    for(let i = 0; i<numbers.length; i++){
        if(numbers[i] === find){
            count += 1;
        }
    }
    return count;
}
let count =  countSpecificNumber(numbers,5);
console.log(count);