// const numbers = [45,65,23,98,19];

// for(let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }

// for(const number of numbers){
//     console.log(number);
// }


const products = [
    {id: 1, name: 'xiami  phone one light', price: 19000},
    {id: 2, name: 'mac book air laptop', price: 19000},
    {id: 3, name: 'lenovo yoga laptop 2025', price: 19000},
    {id: 4, name: 'Dell inspiron laptop', price: 19000},
    {id: 5, name: 'Samsung phone note 7', price: 19000},
    {id: 6, name: 'iphone', price: 19000},
    {id: 7, name: 'Nokia old age phone gone', price: 19000},
    {id: 8, name: 'One phone', price: 19000},
]


function mathchedProducts(products,search){
    let matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search)){
            matched.push(product);
        }
    }
    return matched;
}

const result = mathchedProducts(products,'laptop');
console.log(result);