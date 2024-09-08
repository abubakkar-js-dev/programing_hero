const participants = ['Rahim','Karim','chattar','Sathi','Jobbar','kader','Sader','pader'];

let randomIndex = Math.floor(Math.random() * participants.length);

const getWinner = participants[randomIndex];
console.log('Winner is :',getWinner);