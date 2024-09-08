
let sentance = 'Amar sonar bangla, ami tomay valobasi A B C A';

function countVowel(str){
    str = str.toLowerCase();
    let vowels = ['a','e','i','o','u'];
    let count = 0;
    
    for(let letter of str){
        if(vowels.includes(letter)){
            count += 1;
        }
    }
    return count;
}

console.log(countVowel(sentance));