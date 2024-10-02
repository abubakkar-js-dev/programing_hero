const products = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'Dell', price: 45000},
    {id: 3, name: 'Hp', price: 75000},
    {id: 4, name: 'mac', price: 245000},
];

const names = products.map((product) => product.name);
console.log(names);

const prices = products.filter((product) => product.price <= 65000);
console.log(prices);

// forEach

products.forEach(p => console.log(p.price));

const affordableProduct = products.find(product => product.price < 50000);
console.log(affordableProduct);


// reduce 
const total = products.reduce((prev,curr)=> prev + curr.price,0);

console.log(total);