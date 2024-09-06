const colors = ['red','blue','green','yellow','orange']
let neColors = [];

for(let i = 0; i < colors.length; i++){
    let color = colors[i];
    neColors.unshift(color);

}
// console.log(neColors);


// task 2

const numbers = [12, 98, 5, 41, 23, 78, 46];
let newNum = [];

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        newNum.push(numbers[i]);
    }
}
// console.log(newNum);

var names = ['Tom','Tim','Tin','Tik','Tok'];
let str = '';
for(let v of names){
    str += v;
}
// console.log(str);




const statement = 'I am a hard working person';

let reversedStatement = statement.split(" ").reverse().join(" ");
// reversedStatement.join('')
console.log(reversedStatement);