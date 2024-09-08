const mobiles = [
    {brand:'Samsung', price: 25000, camera: 48, color: 'Black' },
    {brand:'Vivo', price: 15000, camera: 12, color: 'Black' },
    {brand:'Apple', price: 250000, camera: 48, color: 'Black' },
    {brand:'HTC', price: 50000, camera: 48, color: 'Black' },
    {brand:'Walton', price: 10000, camera: 48, color: 'Black' },
    {brand:'Realme', price: 18000, camera: 48, color: 'Black' },
]

function getMax(phones){
    let maxPricePhone = phones[0];
    for(let phone of phones){
        if(phone.price > maxPricePhone.price){
            maxPricePhone = phone;
        }
    }
    return maxPricePhone;
}


let maxPricesPhone = getMax(mobiles);
console.log(maxPricesPhone);