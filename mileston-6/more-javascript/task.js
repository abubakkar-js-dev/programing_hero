// Task 1

// function greether(){
//     setTimeout(()=>{
//         console.log('Hello candu');
//     },5000)
// };
// greether();
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)



// function delayGreeting(name,delayTime){
//     setTimeout(() => {
//         console.log(`Hello, ${name}!`)
//     }, delayTime);
// }

// delayGreeting('Sahara',3000)



// Task 2

// function tellJoke(){
//     const jokesIntervale = setInterval(() => {
//         console.log(`Why don't scientists trus atoms? Because they make up everything!`);
//     }, 2000);
//     setTimeout(() => {
//         clearInterval(jokesIntervale);
//     }, 10000);
// }

// tellJoke();

// function tellJoke2(){
//     console.log(`Why don't scientists trus atoms? Because they make up everything!`);
// }
// const jokesInterval = setInterval(() => {
//     tellJoke2();
// }, 2000);

// setTimeout(() => {
//     clearInterval(jokesInterval);
// }, 10000);

let x = 1;
let intervalId = setInterval(() => {
    console.log(x++);
    if(x > 3) {
        clearInterval(intervalId);
    }
}, 1000);