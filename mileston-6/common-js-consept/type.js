// primitive
const a = 5;
const b = 'Hello world!';
const c = true;
//  non - primitive
const ages = [35,65,32];
const student = {id: 23, class: 7};
console.log(typeof a, typeof b, typeof ages, typeof student, typeof c);

const person = {name: 'Mr. Abc', age: 22};
let person2 = person;
person2.name = "Lol";
console.log(person);
console.log(person2);