const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true,

};

const keys = Object.keys(glass);
const values = Object.values(glass);
console.log(keys);

console.log(values);

const pairs = Object.entries(glass);
console.log(pairs);

// delete glass.color;
const {color, ...newGlass} = glass;
console.log(glass);
console.log(newGlass);
console.log(color);

//  will be not delete and update when use freeze.
Object.freeze(glass);

delete glass.isCleaned;

console.log(glass);

//  will update but cant delete;

Object.seal(glass);
