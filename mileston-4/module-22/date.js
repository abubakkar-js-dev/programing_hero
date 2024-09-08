const date = new Date('2025-06-16');
console.log(date.toLocaleDateString('en-GB'));

const day = date.getDate();
// const miniute = date.getMinutes();
const month = date.getMonth();
// console.log(miniute)
const year = date.getFullYear();
console.log(day);
console.log(month);
console.log(year);