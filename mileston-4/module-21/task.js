// Task 1

// function multiply(num1,num2,num3,num4){
//     const result = num1 * num2 * num3 * num4;
//     console.log(result);
//     return result;
// }
// multiply(1,2,3,4);


//  Task 2

// function dobuleOrHalf(number){
//     let result = 0;
//     if(number %2 === 1){
//       result = number * 2; 
//     }else{
//         result = number / 2;
//     }
//     return result;
// }

// console.log(dobuleOrHalf(6));


// task 3

// function make_avg(intNumbersArray){
//     let sum = 0;
//     let len = intNumbersArray.length;
//     for(let num of intNumbersArray){
//         sum += num;
//     }
//     let avg = (sum / len).toFixed(2);
//     return avg;
// }

// let intArray = [12,6,3,1,6,4]

// let avgNumber = make_avg(intArray);
// console.log(avgNumber);


// TASK 4

// function countZero(binaryStr){
//     binaryNumbers = binaryStr.split("");
//     let sumOfZero = 0;
//     for(let i = 0; i < binaryNumbers.length; i++){
//         if(binaryNumbers[i] === "0"){
//             sumOfZero += 1;
//         }
//     }
//     return sumOfZero;
// }

// let binaryNumbers = "100110110001010";
// const count = countZero(binaryNumbers);
// console.log(count);


// Task 5

 function odd_even(num){
    let number = num;
    if(num%2 === 0){
      return 'Even';
    }else{
      return 'Odd';
    }
 }

 console.log(odd_even(0));

