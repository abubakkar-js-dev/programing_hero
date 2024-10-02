// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json));

const url = "https://jsonplaceholder.typicode.com/todos/1";



function loadData(url){
    fetch(url)
.then(res => res.json())
.then(json => console.log(json));
}
document.getElementById('btn-load').addEventListener('click',() =>{
    loadData(url);
});


