const products = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'Dell', price: 45000},
    {id: 3, name: 'Hp', price: 75000},
    {id: 4, name: 'mac', price: 245000},
];


// has some attributes,method
class Product{
    constructor(name){
        this.name = name
    }
    country = "Bangladesh";
    speak(talk){
        console.log(`Talking about ${talk}`);
    };
}

const lenovo = new Product('Apple Mama');
console.log(lenovo);
lenovo.speak('Lol 😁');


class Teacher{
    constructor(name,age,sub){
        this.name = name;
        this.age = age;
        this.sub = sub;
    };
    lecture(){
        console.log('Sir is teaching Math.');
    }
}

const talebSir = new Teacher('Abu Taleb',38,'Math');
talebSir.lecture();
console.log(talebSir);

const rahimSir = new Teacher('Rahim Uddin',42,'Chemistry');

console.log(rahimSir);