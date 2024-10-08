function checkAge(){
    const ageInput = document.getElementById('input-age').value;
    const errorTag = document.getElementById('error');
    try{
      const age = parseInt(ageInput);
      if(!isNaN(age) && age.toString() === ageInput && age >= 18 && age <= 30){
            console.log('You are the right person')
            errorTag.innerHTML = '';
      }else{
        throw "Please enter a number";
      }
    }catch(err){
        errorTag.innerHTML = err;
    }
    finally{
        console.log('All done inside try catch')
    }
    console.log(111);
}