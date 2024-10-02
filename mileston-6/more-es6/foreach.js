const numbers = [3,4,5,67,7,2,6,10];
const result2 = numbers.map(el => el);

// numbers.forEach(el => console.log(el))


// filter method in Array
const players = [74,67,34,64,70,59];

        // filter selects elements based on a condition and returns an array with the elements that fulfilled the condition
const filteredPlayers =  players.filter(player => player > 70);
const filteredPlayers2 = players.filter(player => player > 50);

console.log(filteredPlayers);


const friends = ['Tom','John','Micheal','Oliver'];

const oddLengthFriends = friends.filter(friend => friend.length % 2 === 1);
console.log(oddLengthFriends);
