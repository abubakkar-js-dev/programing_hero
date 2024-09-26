const student = {
    name: "Mr. ABC",
    age: 21,
    department: 'Economics',
    'blood-Group': 'A+'
}

const {name,...lol} = student;

console.log(lol)