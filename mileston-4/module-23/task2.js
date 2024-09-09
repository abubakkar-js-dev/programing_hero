
const names =  ['rahim', 'robin', 'rafi', 'ron', 'rashed',];

console.log(smallestName(names));


function smallestName(names){
    let smallest = names[0];
    for(let name of names){
        if(name.length < smallest.length){
            smallest = name;
        }
    }
    return smallest;
}
