function costOfShopping(pantQuantity,shirtQuantity,shoesQuantity){
    const pantPrice = 750;
    const shirtPrice = 580;
    const shoesPrice = 1720;

    const totalPantPrice = pantPrice * pantQuantity;
    const totalShirtPrice = shirtPrice * shirtQuantity;
    const totalShoesPrice = shoesPrice * shoesQuantity;

    const totalPrice = totalPantPrice + totalShirtPrice + totalShoesPrice;
    return totalPrice;
}

let totalCost = costOfShopping(3,0,2);
console.log(`Total cost of shopping is: ${totalCost} tk.`)