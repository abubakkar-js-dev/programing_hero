function calculateMoney(ticketSale){
    if(ticketSale < 0){
        return 'Invalid Number';
    }else if(typeof ticketSale === 'string'){
        return 'String Not allow';
    }
    // return ticketSale * 120 - (500 +  50 * 8 );
}

// testing problem
console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-130));


