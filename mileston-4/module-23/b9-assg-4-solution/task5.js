function monthlySavings(Earninglist,livingCost){
   if(Array.isArray(Earninglist) !== true || Number.isNaN(livingCost) === true){
    return 'invalid input';
   }
    let totalEarnings = 0;
    for(let payment of Earninglist){
        if(payment >= 3000){
        // deduct the 20% tax
        let tax = payment * 20/100
        totalEarnings += (payment - tax);
        }
        else{
            totalEarnings += payment;
        }
        
    }
    const savings = totalEarnings - livingCost;
    return savings < 0 ? 'earn more' : savings;
}

// Testing problem

console.log(monthlySavings([1000,2000,3000],5400));
console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000));

console.log(monthlySavings([ 900 , 2700 , 3400] , 10000));
console.log(monthlySavings(100, [ 900 , 2700 , 3400]));