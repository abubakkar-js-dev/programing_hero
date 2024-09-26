const max = Math.max(4,3,6,7,3,8);
console.log(max);

const numbers = [1,2,5,47,8,9,0,5];
const maxArr = Math.max(...numbers);
console.log(maxArr);

const friends =  ["Rahim","Karim","Jobbar","Karim","Rafik"];
const newFriends = [...friends,'Kabul','Babul','Abul'];

newFriends.push('Abdullah');
console.log(newFriends,friends);