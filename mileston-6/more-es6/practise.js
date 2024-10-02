const number1 = [1,3,5,7,9];
// const oddNumbers1 = number1.map(v => v+1 );
// console.log(oddNumbers1);

// using for loop
const newNumber1 = [];
for(let num of number1){
    num += 1;
    newNumber1.push(num);
}
// console.log(newNumber1);


const number2 = [33,50,79,78,90,101,30];

const divisibleByFive = number2.filter(v => v%10 === 0);

// console.log(divisibleByFive);

const firstDivisibleByFive = number2.find(v => v%10 === 0);

// console.log(firstDivisibleByFive);


const peoples = [
    {name:'Nodi',age: 28,position: 'Senior'},
    {name:'Rabi',age: 27,position: 'Junior'},
    {name:'Rafi',age: 40,position: 'Senior'},
];

const seniorPeoples = peoples.filter(people => people.position === 'Senior');
seniorPeoples.forEach(people => {
    console.log(people.name);
});



// reduce 

const peoples2 = [
    {name: 'Meena', age: 20},
    {name: 'Rina', age: 15},
    {name: 'Suchorita', age: 22},
];
// let ageTotal = 0
// for(let people of peoples2){
//     ageTotal = ageTotal + people.age;
// }

// console.log(ageTotal);


//need to complete it😔😔😔

const ageTotal = peoples2.reduce((prev,curr) =>  prev + curr.age,0);
console.log(ageTotal);
