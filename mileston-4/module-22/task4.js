function longestStr(str){
    str = str.split(" ");
    let longestWord = '';
    for(let i = 0; i<str.length; i++){

        if(str[i].length > longestWord.length){
            longestWord = str[i];
        };
    }
    return longestWord;
}


const longest = longestStr('Hey, Programmer. What is your name brother?');
console.log(longest);