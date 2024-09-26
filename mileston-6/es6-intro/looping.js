const numbers = [2,4,5,6,3];

for(const num of numbers){
    console.log(num);
};

const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true,

};

glass.name = 'Lol';

// for(let prop in glass){
//     const value = glass[prop];
//     console.log(prop,value);
//     // console.log(prop.length);
// };

const keys = Object.keys(glass);
console.log(keys);

for(let key of keys){
    console.log(key,glass[key]);
}

const addAll = (a,b,c,d)=> a+b+c+d;

console.log(addAll(2,3,4,5));