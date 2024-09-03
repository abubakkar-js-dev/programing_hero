// const: value will not change 
// let : value can change
//var  : we should not use it




let  sathirVatar = ["Shuvo","Trubo","Drubo","Nrubu", "Grubo"];
let acceptRequest = false;
let agreePromise = false;

if(acceptRequest === true){
    if(agreePromise){
        console.log(`Thanks My dear friend. I am always dedicated for you.😘`);
    }else{
        console.log("Haramzadi tor kopale dukkho ache 😡")
    }
}else{
    console.log("Tumi jao cole jao. shudhu sriti rekhe jao. and vatar niye jao.")
    callSathirVatar(sathirVatar);
}


function callSathirVatar(vatarList){
    for(let vatar = 0; vatar < vatarList.length; vatar++){
        console.log(`My name is ${vatarList[vatar]} . I am the ${vatar} number vatar of sathi`);
    }
}



