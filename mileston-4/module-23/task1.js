function lowestNumber(numbers){
    let minNum = numbers[0];
    for(let num of numbers){
        if(num < minNum){
            minNum = num;

        }
    }
    return minNum;
}

const heights2 = [167, 190, 120, 165, 137];
const minNumber = lowestNumber(heights2);
console.log(minNumber);