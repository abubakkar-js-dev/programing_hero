function checkName(name){
    if(typeof name !== 'string'){
        return 'Invalid';
    }
    let lastLetter = name[name.length - 1].toLowerCase();
    let CheckLatter = ['a','y','i','e','o','u','w']
    // let result = false;

    
    // for(let char of CheckLatter){
    //     if(char === lastLetter){
    //         result = true;
    //     }
    // }
    // if(result){
    //     return 'Good Name';
    // }else{
    //     return 'Bad Name';
    // }
    let result = CheckLatter.includes(lastLetter);
    return result ? 'Good Name' : 'Bad Name'
}

// Testing Program 2

console.log(checkName('Salman'));
console.log(checkName('RAFEE'));
console.log(checkName(199));
console.log(checkName(["Rashed"]));
