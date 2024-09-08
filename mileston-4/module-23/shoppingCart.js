const products = [
    {name: "shampoo",price: 350, quantity:5},
    {name: "shoap",price: 150, quantity:3},
    {name: "Chiruni",price: 120, quantity:3},
    {name: "T-shirt",price: 220, quantity:6},
]

function getTotalCost(products){
    let totalPrice = 0;
    for(let product of products){
        // const thisTotalPrice = product.price * product.quantity;
        totalPrice += (product.price * product.quantity);
    }
    return totalPrice;
}

const totalCost = getTotalCost(products);
console.log(`Your total cost is ${totalCost} tk.`);