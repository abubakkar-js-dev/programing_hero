let arr= [1,2,3,4,5,6,7,3,5,2,9];

// arr.reverse();
// let reversed = [];
// for(let i = 0; i < arr.length; i++){
//      let num = arr[i];
//      reversed.unshift(num);
// }
// console.log("Reversed-1: ",reversed);

// let reversed2 = []
// for(let num of arr){
//      reversed2.unshift(num);
// }
// console.log("Reversed-2: ",reversed2);


let reversed3 = [];
for(let i = arr.length-1; i >=0; i--){
     reversed3.push(arr[i]);
}
// console.log(reversed3);

let str1 = "Hello world!";
let  newStr1 = str1.split("").reverse().join("");
console.log(newStr1);
console.log(str1);

   



