/**
 * Truthy:
 * 1. true
 * 2. any positive or negetive number other than 0;
 * 3. any string is truthy. but emty string is falsy
 * 4. string 0 is truthy value
 * 5. [] (empty array)
 * 6.{} (empty object)
 * 
 *Falsy Values:
 * 1. false
 * 2.0
 * 3. '' (empty string)
 * 4. undefined
 * 5. null
 * 6.
 * 
 *
 */

let x = null;

if(!!x){
    console.log('Value is truthy');
}else{
    console.log('value is falsy');
}