
// for(let i = 0; i <=20; i+=3){
//     if( i % 2 == 0){
//         console.log(`${i} is a even number`);
//     }else{
//         console.log(`${i} is a odd number`);  
//     }
// }

// let number = 200;
// let sum = 0;
// while( number <= 255 ){
//     sum += number;
//     number++;
// }
// console.log('Sum is ',sum);

// for(let i = 100; i>=0; i--){
//     console.log(i);
// }

// for(let i = 0; i < 5; i++){
//     if(i % 2 !== 1){
//         console.log(i);
//     }
// }
let sum = 0;
for(let i = 0; i <= 100; i++){
    if(i % 5 === 0 && i % 7 == 0){
        sum += i;
    }
}
console.log(sum);
