
function inchToFeet(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = 'Height is ' + feetNumber + ' feets ' + inchRemaining + ' inche.';
    return result;
}

console.log(inchToFeet(32));