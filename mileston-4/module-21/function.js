const price = 20;

function fanOffKor(){
    console.log("Bosa theke uthe dara");
    console.log("Walk toward the switch");
    console.log("Click the switch to off of tha fan");
}
// call the function

function brushTeeth(){
    console.log("Pick up the brush");
    console.log("Add past");
    console.log("2 min ghoso and fena felo");


}

function calculation(num1,num2,operator){
    if(operator === "+"){
        return num1 + num2;
    }else if(operator === "-"){
        return num1 - num2;
    }else if(operator === "*"){
        return num1 * num2;
    }else if(operator === "/"){
        return num1 / num2;
    }else{
        return ('not found vai');
    }

}

console.log(calculation(18,5,'-'))
