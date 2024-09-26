const friends = ['Rahim','Rahi','Taranjum','Karim','Abul','Rabi'];

const evenLengthCheck = (arr) =>{
    const evenNameFriend = [];
    for(let el of arr){
        if(el.length % 2 === 0){
            evenNameFriend.push(el);
        }
    }
    return evenNameFriend;
}

let result = evenLengthCheck(friends);
console.log(result);