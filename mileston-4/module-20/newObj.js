let obj1 = {
    color: 'white',
    size: 23,
    weight: 21,
}

let obj2 = new Object();
obj2.name = "name nai"
// console.log(obj2);


let obj3 = Object.create({});
obj3.brand = "Samusano",
obj3.price = "4 lakh"
console.log(obj3);

for(let i in obj3){
    console.log(i,obj3[i]);
}