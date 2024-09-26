// function decleration
function add(a,b){
    return a + b;
}
const result1 = add(4,5);
console.log(result1)
// function expression
const add2 = function(a,b){
    return a + b;
}
const result2 = add2(4,5);
console.log(result2);

// arrow functin
const result3 = (a,b)=>{ return a + b};
console.log(result3(4,5));