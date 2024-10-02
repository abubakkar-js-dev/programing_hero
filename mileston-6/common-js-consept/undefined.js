/**
 * 8 ways to get undefined
 *  1. varible that is not initialized.
 *  2. function with no return
 *  3. function has no paramer
 *  4. ir return has nothing on the righ side will return undefined
 *  5. if property that doesn't exists on an object will give you undefined
 *  6. accessing array elements outside of the index ranges
 *  7. deleting an element inside an array
 *  8. set a value undefined
 */

let first;

// console.log(first);

function second(a,b){
    const total = a+b;
}

// console.log(second(2,3));

function third(a,b,c,d){
    return a+b+c+d;
}
// console.log(third(1,2,3));


let person = {name: 3,age:22,};

let isMarried = person.isMarried;
console.log(isMarried);


const sixth = [1,2,3,4];

console.log(sixth[2],sixth[5]);

delete sixth[3];

console.log(sixth);

const eighth = undefined;
const ninth = null;


const data = {results: [], updated: null};

// console.log(typeof undefined);

console.log(typeof null);



