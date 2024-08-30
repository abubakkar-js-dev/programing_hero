const price = 30000;
if(price >= 30000 ){
    // 12% discound
    const discount =  price * 12/100;
    const payMoney = price - discount;
    console.log(payMoney);
}else if(price >= 20000){
    //  5% discound
    const discount = price * 5/100;
    const payMoney = price - discount;
    console.log(payMoney);
}else{
    console.log(price);
}
