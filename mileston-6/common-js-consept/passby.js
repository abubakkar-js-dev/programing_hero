let num1 = 23;
let num2 = 3;
function multiply(a,b){
    a = 5;
    const result = a * b;
    return result;
}

const output = multiply(num1,num2);

console.log(output)
console.log(num1);

let person1 = {name: 'Rahima',age: 18};
let person2 = {name: 'Rahi',age: 21};

function changeValue(obj){
    obj.name = 'Sahara';
    obj.age = 25;
}

console.log(person1);
// console.log(person1.name)
changeValue(person1);
console.log(person1);
changeValue(person2);
person2.name = 'Sathi Mondol';
console.log(person2);