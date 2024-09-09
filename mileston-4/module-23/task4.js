const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

function getAveragePrice(products){
    let sum = 0;
    let count = products.length;
    for(let product of products){
        sum += product.price;

    }
    const avg = (sum /count).toFixed(2);
    return avg;
}

const avgPrice = getAveragePrice(phones);
console.log(avgPrice);