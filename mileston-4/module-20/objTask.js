// TASK 1

const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    'Golden rod': '#daa520',
}

let goldenRod = colors['Golden rod'];
console.log(goldenRod);


// TASK 2

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
}

let pasenger = "Passenger capacity";
car[pasenger] = 5;
// console.log(car);


//  TASK 3

let students = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30,
    }
}

let physicsMarks = students.physics.marks;
// console.log(physicsMarks);


//  TASK 4 

let student = {
    name: 'Mr. Abc',
    age: 21,
    city: 'Joypurhat',
    isStudent: true,
}
console.log("Student-P: ",Object.keys(student).length)

let totalProp = 0;
let keysOfStudents = Object.keys(student);
for(let i = 0; i < keysOfStudents.length; i++){
    totalProp = i + 1;
}
console.log(totalProp);



//  TASK 5

let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
}

for(let i in myObject){
    console.log(`Keys: ${i} | type: ${typeof(myObject[i])}`);
}
  