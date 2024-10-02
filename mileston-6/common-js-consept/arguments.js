function sum(a,b,c){
    arguments['6'] = 34; 
    // console.log(arguments.length)
    // console.log(arguments[5],arguments[6]);
    // console.log('Length: ',arguments.length)
    const arg = [...arguments];
    const result = a+b+c;
    console.log(arg)
    return result;
}
const total = sum(2,3,4,45,66,64);

console.log(total);


