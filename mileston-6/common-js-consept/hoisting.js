// console.log(printHello);
printWorld();
for(var i = 0; i < 10; i++){
    console.log(i);
}

console.log('Outer Value:',i);


function somethings(){
    console.log(19);
}

const printHello = function(){
    console.log('Hello');
}
printHello();

var printWorld = () => console.log('World');
somethings();
