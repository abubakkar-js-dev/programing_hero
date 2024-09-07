function sumOfEvenNumbers(arr){
    let sum = 0;
    for(const number of arr){
        if(number %2 === 0){
            sum += number;
        }
    }
    return sum;
}

let numbers = [2,4,6,8,5,3];

const sum = sumOfEvenNumbers(numbers);

console.log('sum of ever numbers is:',sum);