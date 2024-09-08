function avgEven(numbers){
    let even = [];
    for(let num of numbers){
        if(num % 2 === 0){
            even.push(num);
        }
    }
    let sum = 0;
    const  count = even.length;
    for(let num of even){
        sum = sum + num;
    }
    const avg = sum / count;
    return avg;
}

const numbers = [2,5,46,7,8,2,3,7,9];

const avgEvenNumbers = avgEven(numbers);