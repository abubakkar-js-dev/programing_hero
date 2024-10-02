function greetings(handler,name){
    console.log(handler(name));
}

const name = 'Hakim Miya Vai'
const number = [45,64,64,7,23];
const laptop = {price: 34500, brand: 'Lenovo', memory: '8gb'};

function handleGreet(name){
    return `Hello bro, Good Morning ${name}`;
}

function hadleGreetEve(name){
    return `Hello bro, Good Evening ${name}`;
}

function greetNight(name){
    return `Good night ${name}`
}

greetings(handleGreet,'Mr Lol');
greetings(handleGreet,'Mr Bean');
greetings(hadleGreetEve,'Ms. Sathi');
greetings(greetNight,'Rasel Ahmed');

document.getElementById('btn-submit').addEventListener('click',handleSubmitBtn())


function handleSubmitBtn(){
    console.log('Submit button is clicked.');
};