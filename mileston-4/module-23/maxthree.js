const jim = 56;
const tim = 89;
const kim = 68;

if(jim > tim && jim > kim){
    console.log("Jim is the ultimate boss");
}else if(tim > jim && tim > kim){
    console.log("Tim is the boss!");
}else{
    console.log('Kim is the kardashians boss!');
}

function maxThree(num1,num2,num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }else if(num2 > num1 && num2 > num3){
        return num2
    }else{
        return num3
    }
}

const max = maxThree(44,264,122);
console.log("Power max is:",max);