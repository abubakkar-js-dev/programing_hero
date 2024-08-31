/**
 *TERNARY OPERATOR
 */

 const age = 32;

//  if(age >= 18){
//     console.log("you can vote");
//  }else{
//     console.log("You cannot vote");
//  }

age >= 18 ? console.log('You can vote') : console.log('Sorry you are not adult');

let price = 800;
let isPoor = true;

price = isPoor ? price -= 300 : price += 300;
console.log(price);


let desktop = 50000;
let laptop = false;

if(!laptop){
    console.log(`You need to buy a desktop. with minimum cost ${desktop} tk`);
}else{
    console.log("You need not buy a Desktop");
}