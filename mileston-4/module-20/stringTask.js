
let str = "Ami aaaAA valo nai vai. Amar life ta shes vai.";

let newStr = str.split("");

// let totalA = 0;
 
// for(let i = 0; i < newStr.length; i++){
//     if(newStr[i].toLowerCase() === "a"){
//         totalA += 1;
//     }
// }
// console.log(totalA);


//  Task 3

// for(let i=0; i<newStr.length; i++){
//     console.log(newStr[i]);
// }

// console.log(typeof(newStr));

// task 3
let str2 = "This is our exam. "
let vowel = ['a','e','i','o','u'];
let containAllVowel = true;

str2 = str2.toLowerCase().split("");
// console.log(str2)

for(let i = 0; i < vowel.length; i++){
    if(!str2.includes(vowel[i])){
        containAllVowel = false;
        break;
    }
}
str2 = str2.join("");
console.log(containAllVowel);
console.log(str2);


// Task 4
// let something = "This is our exam. You should be attend this. She was my EX";

// let somethingNew = something.split("");

// for(let i = 0; i < somethingNew.length; i++){
//     if(somethingNew[i] === 'x'){
//         somethingNew[i] = "y";
//     }else if(something[i] === 'X'){
//         somethingNew[i] = "Y";
//     }

//     console.log(something[i]);
// }
// let result = somethingNew.join("");
// console.log(result);



// Task 5
// str = str.toLowerCase();

// let strts5 = str.split(" ");

// for(let v = 0; v < strts5.length; v++){
//     strts5[v] = strts5[v].split("")[0].toUpperCase() + strts5[v].substring(1);
// }
// strts5.join(" ");
// console.log(strts5);















//  TASK 5

// let greetings = "Hello guys! How are you?"

// const newGreet = greetings.toUpperCase();
// console.log(greetings);
// console.log(newGreet);