//  Short  string in array

let fruits = ['banana','apple','mango','pears','pine-apple'];

fruits.sort();
console.log(fruits);

//  sort number in array

let num = [2,6,3,1,7,9,10,165,12,4,5];

num.sort((a,b) =>{
    return b - a;
});
console.log(num);