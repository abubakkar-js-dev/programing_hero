let weight = 54;
let height = 1.7;

// const bmi = (weight / height**2).toFixed(2);
// console.log(bmi);

function bmiWithFunc(w,h){
    return (w / h**2).toFixed(2);
}

console.log(bmiWithFunc(54,1.7));