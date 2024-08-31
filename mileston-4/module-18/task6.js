let regularTicketFare = 800;
let age = 60;
let student = true;
let ticketPrice;


if(age < 10){
    ticketPrice = 0;
}else if(student){
    ticketPrice = regularTicketFare / 2;

}else if(age >= 60){
    ticketPrice = regularTicketFare * 15/100;
}else{
    ticketPrice = regularTicketFare
}
console.log(ticketPrice);


// if(age < 10){
//     console.log("Free ticket for you");
// }else if(student === true && age < 40){
//     //50% discount for student
//     ticketFare = parseFloat(ticketFare / 2).toFixed(2);
//     console.log(`Ticket fee is ${ticketFare} tk for you.`);
// }else if(age >=60){
//     // 15% discount for senior citizen
//     let discount = ticketFare * 15/100;
//     ticketFare = ticketFare -   discount;
    
//     console.log(`Ticket fee is ${ticketFare} tk for you.`);
// }else{
//     console.log(`You have to pay the full price .Ticket fee is ${ticketFare} tk for you.`);
// }