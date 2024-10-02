// data acces
const data = [{id: 1, name: 'abul', address: 'Kocu khet'}];

console.log(data[0].address);

const products = {
    count: 4000,
    data: [
        {id: 1, name: 'lenovo laptop', price: 65000},
        {id: 2, name: 'mackbook', price: 165000},
    ]
}

// second product price 

const secondProductPrice = products.data[1].price;
console.log(secondProductPrice);


const user = {
    id: 5001,
    name: 'Shoriful Raj',
    address: {
        street: {
            first: '54/1 uttor side',
            second: 'Poribag er goli',
            third: 'no dorai',
        },
        city: 'Dhaka',
    }
}

const user2 = {
    id: 5002,
    name: 'pori bibir majar',
    address: {
        city: 'chittagong',
        coutntry: 'Bangladesh',
    }
}

// acces the second street no.

console.log(user2.address.street?.second);
