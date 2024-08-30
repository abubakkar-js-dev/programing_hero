// TASK 1

var money = 1000;
var applePrice = 280;
var orangePrice = 320;

var totalPrice = applePrice + orangePrice;

var shopKeeperReturn = money - totalPrice;
// console.log(shopKeeperReturn);

// Task 2

const studentMarks = [
    ['Mathematics','Biology','Chemistry', 'Physics','Bangla'],
    [75.25,65,80,35.45,99.50]
]

console.log(avgOfMarks(studentMarks[1]));

function avgOfMarks(arr){
    let sum = 0;
    let avg;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
        avg = sum / arr.length
    }
    return avg.toFixed(2);
}


//  TASK 3 
let givenNumber = 119;
let devider = 8;

let remainder = givenNumber % devider;

console.log(`The remainder is ${remainder}`);


// TASK 4

var a = isNaN('11');
console.log(a);

var b = isNaN(2-10);


if(b){
    console.log('This is Not a number')
}else{
    console.log('This is a number');
}
console.log(typeof(b));