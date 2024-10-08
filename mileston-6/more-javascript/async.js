// console.log(1);
// console.log(2);
// setTimeout(() =>{
//       console.log(3); 
// },3000);
// console.log(4);
// console.log(5);
// console.log(6);

// const { reject } = require("async");


function eat(){
      console.log('I');
      setTimeout(() => {
            console.log('eat')
      }, 2000);
      console.log('Apple');
}

// eat();

// const request = new XMLHttpRequest();

const myLoader = () => {
      return new Promise((resolve, reject)=>{
            const success = Math.random();
            if(success <= 0.5){
                  resolve(success);
            }else{
                  reject(success);
            }
      })
}

myLoader().then(data=> console.log('Resolve with value',data))
.catch(errorData => console.log('Error occured with value',errorData));

// console.log(myLoader());


// fetch('')
//       .then(res => res.json())
//       .then(data => console.log(data))
//       .catch(err => console.error(err));


async function loadData(){
      try{
            const response = await fetch('');
            const data = await response.json();
            console.log(data);
      }catch(err){
            console.log('Error occured',err);
      }
      
}