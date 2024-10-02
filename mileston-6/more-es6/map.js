// map ===> loops through each element of the array and do the operation that you passed in the call back function and hold  the result from each operation in an array and finally returns  your the array.  
const numbers = [3,4,5,67,7,2,6,10];

function dobubleIt(num){
    console.log('Number is now',num)
    return num * 2;
}

// const result = numbers.map(dobubleIt);
// console.log(result);
const output = numbers.map(v => v*2);
console.log('Output: ',output);


// const dobubled = [];

// for(const num of numbers){
//     const dobuble = num * 2;
//     dobubled.push(dobuble);
// }

// console.log(dobubled);