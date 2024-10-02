// const user = {id: 1, name: 'Goribullah', job: 'Doctor'};

// const json = JSON.stringify(user);

// const newObj = JSON.parse(json);

// console.log(user);

// console.log(json);

// console.log(newObj);


const shop = {
    owner: 'Mr. Abu Bakkar',
    address: {
        street: 'Kocukhet vuter goli',
        city: 'Panchbibi',
        country: 'BD',
    },
    products: ['Laptop','Mic','Monitor','Keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false,
}


console.log(shop);
const jsonShop = JSON.stringify(shop);
console.log(typeof jsonShop);
