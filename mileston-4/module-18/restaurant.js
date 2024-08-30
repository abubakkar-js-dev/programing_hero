let price = 790;
let age = 40;

if(age <= 12){
    console.log('You can eat free.')
}else if(age >= 60){
    // 50% discount 
    let discount = price * 50/100;
    let payMoney = (price - discount).toFixed(2);
    console.log(`You need to pay only ${payMoney} tk re vai.`);
}else if(age >= 40){
    // 10% discount
    let discount = price * 10/100;
    let payMoney = (price - discount).toFixed(2);
    console.log(`You need to pay only ${payMoney} tk.`);
}else if(age >= 50){
    // 35% discount
    let discount = price * 35/100;
    let payMoney = (price - discount).toFixed(2);
    console.log(`You need to pay only ${payMoney} tk.`);

}else{
    console.log('You need not eat food. Please go to home.')
}
