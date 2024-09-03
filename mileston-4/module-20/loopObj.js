let person = {
    fullName: 'Mr. ABC',
    age: 21,
    weight: 54,
    height: 1.7,
    fevColor: ['red','black','yellow'],

}

// for(let props in person){
//     console.log(props);
//     console.log(person[props]);
// }

// let keys = Object.keys(person);

// for(let i of keys){
//     console.log(i);
// }

let values = Object.values(person);

for(let i = 0; i < values.length; i++){
    console.log(values[i]);
}