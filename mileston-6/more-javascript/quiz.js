// try{
//     console.log('Start');
//     throw new Error('Error occured');
// }catch(err){
//     console.log(err.message);
// }finally{
//     console.log('End');
// }

// console.log('A');
// Promise.resolve().then(()=> console.log('B'));
// setTimeout(() => {
//     console.log('C');
// }, 0);
// console.log('D');

let x = 1;
let intervalId = setInterval(() => {
 console.log(x++);
 if (x > 3) clearInterval(intervalId);
}, 1000);
