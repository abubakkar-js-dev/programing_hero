function getTotalPrice(laptopQuantity,tabletQuantity,mobileQuantity){
   const laptopPrice = 35000;
   const tabletPrice = 15000;
   const  mobilePrice = 20000;

   const laptopTotalPrice = laptopQuantity * laptopPrice;
   const tabletTotalPrice = tabletQuantity * tabletPrice;
   const mobileTotalPrice = mobileQuantity * mobilePrice;

   const totalPrice = laptopTotalPrice + tabletTotalPrice + mobileTotalPrice;
   return totalPrice;
}

const totalCost = getTotalPrice(2,1,3);
console.log(`Total Cost of lapton,tablet and mobile is ${totalCost} tk.`);
