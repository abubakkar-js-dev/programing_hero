let weight = 100;
let height = 1.7;

let BMI = parseFloat(weight / height**2).toFixed(2);
console.log(BMI);

if(BMI < 18.5){
    console.log("You are underweight!");
}else if(BMI >= 18.5 && BMI <= 24.9){
    console.log("You are in normal!");
}else if(BMI >= 25 && BMI <= 29.9){
    console.log("You are overweight!");
}else{
    console.log("You are obese.");
}
