// let friendName = "Harayegeche";
// let haramiFriend = "harayeGeche";

// if(friendName.toLowerCase() === haramiFriend.toLowerCase()){
//     console.log("Paichi tore ebar thapramu!");
// }else{
//     console.log("khuijja khuijja beray pai na to vai!");
// }


// let chair = 'Chair'
// let kedara = 'chair          ';

// if(chair.trim().toLowerCase() === kedara.trim().toLowerCase()){
//     console.log("Duita eki jinis to")
// }else{
//     console.log("Na duita alada jinis");
// }

// slice method

let destination = "Coxes Bazar";

let hat = destination.slice(6,11);
console.log(hat);

let spl = destination.split(' '); // return a  array.
// console.log(spl);

let splJoin = spl.join(' What ');
console.log(splJoin);
console.log(typeof splJoin);

if(destination.toLowerCase().includes('bazar')){
    console.log('Paichi bazar re.');
}else{
    console.log('Bazar re pai nai vai!');
}

let str1 = "Kisu";
let str2 = "komu";

let fullStr = str1.concat(' ',str2);
console.log(fullStr);



let greeting = "Valo thakis vai";

    //using for of loop
    // let reversed = '';
    // for(const i of greeting){
    //     reversed = i + reversed;
    // }
    // console.log(reversed);

    // using for loop

    // let reversed2 = '';
    // for(let i = 0; i < greeting.length; i++){
    //     const letter = greeting[i];
    //     reversed2 = letter + reversed2;
    // };
    // console.log('Reversed:',reversed2);


    // using array method
    let reversed3 = greeting.split('').reverse().join('');
    console.log(reversed3);
 