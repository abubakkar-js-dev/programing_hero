let arr= [1,2,3,4,5,6,7,3,5,2,9];

// arr.reverse();
let reversed = [];
for(let i = 0; i < arr.length; i++){
     let values = arr.pop();
     reversed.push(values)
}
console.log(reversed);

