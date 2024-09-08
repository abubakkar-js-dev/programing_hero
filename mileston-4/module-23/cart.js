const products = [
    {name: "shampoo",price: 350},
    {name: "shoap",price: 150},
    {name: "Chiruni",price: 120},
    {name: "T-shirt",price: 220},
]

function getTotalPrice(produtList){
    let totalPrice = 0;
    for(let product of produtList ){
        totalPrice += product.price;
    }
    return totalPrice;
}
console.log('Total price is: ',getTotalPrice(products) + ' tk');
