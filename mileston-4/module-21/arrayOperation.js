/**
 * Objection: write a function to give me the sum of all numbers in a array
 */

const array = [1,2,3,4,5,6,7,8,9,10,11,21,35]




function sumOfArrayElements(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

const arraySum = sumOfArrayElements(array);
console.log('Sum of the array is:',arraySum);