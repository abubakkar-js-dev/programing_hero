// console.log(1);
// console.log(2);
// setTimeout(() => {
//     console.log(3);
// }, 2000);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
let num = 0;
const clockId = setInterval(()=>{
    num++;
    if(num > 10){
        clearInterval(clockId);
    }else{
        console.log(clockId,num);
    }
},200)