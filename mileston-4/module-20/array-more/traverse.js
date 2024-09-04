let friends = ['Rahim','karim','Jobbar','Chattar'];

friends = friends.join(" ").split("");

let i = 0;
 while( i < friends.length){
    if(friends[i] === " "){
        friends[i] = " 😘 ";
    }
    i++;
 }

 friends = friends.join("");
 console.log(friends);


let numbers = [1,2,3,5,6,7,8,3];

for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}
 