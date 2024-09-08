const height = [65,45,76,70,60,52,70];

// function getmax(numbers){
//     let maxnum = 0;
//     for(const num of numbers){
//         if(num > maxnum){
//             maxnum = num;
//         }
//     }
//     return maxnum;
// }

// const maxHeight = getmax(height);
// console.log('Max height is:',maxHeight);


function getMin(numbers){
    let min = Infinity;
    // let min = numbers[0];
    for(let num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}
console.log(getMin(height));









// let sathiLoves = 100;
// let sathiHusbandLoves = 80;
// let sathiShotinLoves = sathiLoves;

// console.log(sathiLoves,sathiHusbandLoves);
// sathiLoves = sathiHusbandLoves;
// sathiHusbandLoves = sathiShotinLoves;
// console.log(sathiLoves,sathiHusbandLoves);

// OR

// [sathiLoves,sathiHusbandLoves] = [sathiHusbandLoves,sathiLoves]



