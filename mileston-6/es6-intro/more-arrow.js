const substract = (x,y)=> x - y;
const multiply = (a,b,c) => a*b*c;

const getAge = (person) => person.age;

const age = getAge({name: 'Abu Bakkar', age: 32});
console.log(age);

const getThird = (nums) => nums[2];
console.log(getThird([1,23,4,56,6]));

const doubleIt = num => num*2;
console.log(doubleIt(23));

const greet = () => "Hello world!";
console.log(greet());

// if you want to use multiple line arrow function. You need to return keyword for get specific value.
const getFullName = (fname,mname,lname) =>{
    const firstName = fname;
    const middleName = mname;
    const lastName = lname;
    const fullName = firstName + middleName + lastName;
    return fullName;
}

const name = getFullName('Abu ','Bakkar ','Siddik.');
console.log(name);