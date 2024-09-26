const squiredNumAvg = (arr) =>{
    let sum = 0
    for(let i of arr){
        i = i*i;
        sum += i;
    }
    return Math.floor(sum / arr.length);
}

console.log(squiredNumAvg([4,5,3]))