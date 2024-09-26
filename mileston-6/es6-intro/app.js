// var: now reason to use var
// let: allow it to reassaign
//  const do not allow it to reassign

const money = 20;
const moreMoney = money + 400;

console.log(moreMoney);

const numbers = [1,2,3,4,5];

numbers[2] = 10;
console.log(numbers);

const person = {
    name: "Mr. Abc",
    age: 21,
}

let student = {
    name: 'Rahi Ahmed',
    age: 22,
}
student = {
    name: 'Ruhi',
    age: 21,
}
person.name = "Abu Bakkar";
console.log(person);
console.log(student);


// loop
let sum = 0;

for(let i = 0; i<= 10; i++){
    sum += i;
}
console.log(sum);