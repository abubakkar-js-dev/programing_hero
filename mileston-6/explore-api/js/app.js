function loadData2(){
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    fetch(url).then(response => response.json())
    .then(data => console.log(data));
}

function loadUsers(){
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url).then(res => res.json())
    .then(user => showData(user));
}

function showData(user){
    console.log(user);
}

// showData();