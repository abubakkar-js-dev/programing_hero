const disa = 56;
const salman = 95;

if(disa > salman){
    console.log("Disha will get the strawberry!")
}else{
    console.log("Salman will get the strawberry!")
}

// with a function

function getmax(num1,num2){
    if(num1 > num2){
        return num1;
    }else{
        return num2;
    }
}
const max1 = getmax(22,65);
console.log('Max1 number is:',max1);
const max2 = getmax(34,21);
console.log("Max2 number is:",max2);

const ultraMax = getmax(max1,max2);
console.log('The ultramax number is:',ultraMax);