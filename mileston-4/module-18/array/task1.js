let fruits = ["mango","banana","pears","apple","orange"];
console.log(fruits[2]);
console.log(fruits);
fruits[1] = "Jambura";
console.log(fruits);

// TOURIST DESTINATION  

let touristDestination = ["Paharpur", "Mohasthangor","Sopnopuri","Coxes-bazar", "Padma areas"];

touristDestination.push("Bandorban");
touristDestination.push("Kakatua","Khagrachari");
touristDestination.pop();
console.log(touristDestination);


// TASK 3

let books = ["Bangla Literature","English Literature","Love Story","Javascript Books"];

if(books.includes("Javascript Books")){
    console.log("Javascript Book Founded!");
}else{
    console.log("Javascript Books not found");
}

// TASK 4

let arr = ['What','why','how'];
let num = 324;
let str = "Kichu komu na";
let bol = true;

let mixedArr = [arr,num,str,bol];

for(let i = 0; i < mixedArr.length; i++){
    if(Array.isArray(mixedArr[i])){
        console.log(`${JSON.stringify(mixedArr[i])} is a array.`);
    }else{
        console.log(`${mixedArr[i]} is not a array.`);
    }
}

let pLangueage = ["java","javascript","C Programming","Python"];

let webDesign = ["HTMl","CSS","Tailwind","Daisy-Ui"];

let newArray = webDesign.concat(pLangueage);
console.log(newArray);
console.log(pLangueage);
console.log(webDesign);
console.log("hello world");
