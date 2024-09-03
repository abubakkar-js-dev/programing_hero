let person = {
    id: "#1234",
    fName: "Abu",
    lName: "bakkar",
    age: 21,
    weight: "53 kg",
    "family members" :{
        father: "Nur Muhammad",
        mother: "Rujina Begom",
        "elder sister ": "Nahida",
        "little sister" : "Nazira" 
    }
}
// console.log(person.lName.length);
// let props = Object.keys(person);
// let values = Object.values(person);
// console.log(props);
// console.log(values);
// console.log(person["family members"]["elder sister "].concat(" ","Aktar"));

let mobile = {
    brand: "vivo",
    model: "y21",
    price: "15000",
    color: ["Blue","white","Black"]
}

console.log(mobile.brand);

let modelName = mobile["model"];
console.log(modelName);

mobile.warenty = "2 year";
let garrenty = mobile["Garrenty"] = "Nai";
mobile.price = 17000;
console.log(mobile);
console.log("Garrenty = ",garrenty);

const brandHolo = 'brand';

mobile[brandHolo] = "Vai bou";

console.log(mobile);

