/**
 * 1. var let and const
 * 2.default parameter
 * 3. template string
 * 4. arrow function
 * 5. destructuring and spread operator
 * 6. Object.keys,Object.values,Object.entries
 * 7. for of used in arrays and string
 * 8. for in loop used in object
 */
 const a = 54;
 const numbers = [4,65,78];
 const person = {
    name: "Mr. Abc",
 }

 const message = `Hi, ${person.name} has a: {${a} acces to ${numbers[1]}}`
if(true){

}

const square = a => a*a;

const sum = (a,b) => a+b;



const {a: lol, name,...all} = { a: 2, b: 5, c: 8,  name: 'Object', age: 55};

console.log(all);


const [name1,name2, ...othersName] = ['ram','sam','jodu','modhu','koudu'];

console.log(name2);
console.log(othersName);