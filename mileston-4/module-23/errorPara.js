function multiply(a,b){
    const multip = a * b;

    if(typeof a !== 'number' || typeof b !== 'number'){
        return "Need to Provide a number";
    }
    return multip;
}

const result = multiply( 2 + 1);
console.log(result);


function fullName(first,second){
    if(typeof first !== 'string' ){
        return 'Firsname should be a string'
    }else if(typeof second !== 'string'){
        return 'Lastname should be a string'
    }
    const full = first + ' ' + second;
    return full;
}

const full = fullName('Abu','Bakkar');
console.log(full);


function getPrice(product){
    if(typeof product !== 'object'){
        return 'Please give a object'
    }
    const price = product.price;
    return price; 
}


let phone = {
    brand: "vivo",
    price: "25000",
}

const phonePrice = getPrice(phone);
console.log(phonePrice);
