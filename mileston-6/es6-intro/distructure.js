const actor = {
    name: 'Ananta Jolil',
    age: 32,
    phone: '0182837483',
    money: 4344343,
}

// const phone = actor.phone;
// console.log(phone);
// If right side is an object left side of descructing as well object.
// use property name as a variable that contains the property value
const {age,phone: mobileNumber} = actor;
console.log(mobileNumber)
console.log(age);


// Array distructuring.
const numbers = [3,4,67,34,2,65,23];

const [first,second] = numbers
console.log(first);
console.log(second);

function dobuleThem(a,b){
    return [a*2,b*2];
};

const [num1,num2] = dobuleThem(3,4);
console.log(num1,num2);