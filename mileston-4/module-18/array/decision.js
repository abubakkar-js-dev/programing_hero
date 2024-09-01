
let fruits = ['apple','banana','orange','pineaple'];
let flowers = ['rose','lili','sunflower','daisy','marigold']
let para = document.getElementById('para');


let apple = fruits.at(2);
console.log(apple);

para.textContent = fruits.join(' + ');

// delete fruits[1];
console.log(fruits);
for(let i = 0; i < fruits.length; i++){
    if(fruits[i] === undefined){
        fruits[i] = 0;
    }
    
}
console.log(fruits);

let fruitsAndFlowers = flowers.concat(fruits,'Sonar Bangla Ful'); // we can add multiple arries or data.
console.log(fruitsAndFlowers);

console.log(flowers);

let newFlowers = flowers.splice(2,2,'ki j dei','ful nai','ful tul');
console.log(newFlowers);
console.log(flowers);


let names = ['Abul','Kabul','Babul','Mokbul','Robul']

let newNames = names.toSpliced(2,2,"Tabul");
console.log(names);
console.log(newNames);

let somenames = newNames.slice(2,4,'Chabul');
console.log(somenames);






