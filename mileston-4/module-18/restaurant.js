let price = 790;
let age = 12;

if(age <= 12){
    console.log('You can eat free.')
}else if(age >= 60){
    // 50% discount 
    let discound = age * 50/100;
    let payMoney = price - discound;

    console.log(`You need to pay ${discound}`)
}