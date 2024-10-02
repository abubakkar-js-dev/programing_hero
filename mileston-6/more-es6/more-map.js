const numbers = [3,4,65,7,4,2,5,76];

const dobubled = numbers.map(num => num * 2);
// console.log(dobubled);

const fiveBonouse = numbers.map(v => v+5);
// console.log(fiveBonouse);

const halves = numbers.map((v,i,arr)=> v /2);
// console.log(halves);

const friends = ['Tom','John','Micheal','Oliver'];

const lengthOfFriends = friends.map(friend => friend.length);


// console.log(lengthOfFriends);

const lastLetterOfFriend = friends.map((friend) => friend[friend.length - 1]);

console.log(lastLetterOfFriend);