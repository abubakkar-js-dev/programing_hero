// is strings length even or odd
let nam = "Abu BakkarSiddik";

function strLengEvenChecker(str){
    let len = str.length;
    console.log(len);
    if(len %2 === 0){
        return true;
    }else{
        return false;
    }
}

const lenChecker  = strLengEvenChecker(nam);
console.log(lenChecker);


function dobuleOrTripple(num,isdobule){
    if(isdobule){
        let result = num * 2;
        console.log(num,result);
        return result;
    }else{
        let result = num * 3;
        console.log(num,result);
        return result;
    }
}

dobuleOrTripple(23,true);


function strLenChecker(str){
    const len = str.length;
    console.log("length is: ",len);
    return len;
}

strLenChecker("Hello world!");
