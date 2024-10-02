const  loadComments = () =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error('error happed',error));
}


const loadComments2 = async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await response.json();
    console.log(data);
}

const creatPost = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify({
            name: 'Abu Bakkar',
            fatherName: 'Nur',
            address: 'Joypurhat',
        }),
        headers: {
            'Content-type' : 'application/JSON; charset=UTF-8',
        }
    })
    .then(res => res.json())
    .then(data => console.log(data));
}


const putPost =  () =>{
    fetch('https://jsonplaceholder.typicode.com/posts/1',{
        method: 'PUT',
        body: JSON.stringify({
            id: '102',
            title: 'LOL',
            name: 'Sahara',
            age: 35,
            department: 'Bangla'
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(response => response.json())
    .then(data => console.log(data));
}


const patchPost = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts/1',{
        method: 'PATCH',
        body : JSON.stringify({
            id: '5052',
            title: 'Title nai'
        }),
        headers: {
            'Content-type' : 'application/json; charset =UTF-8',
        },
    })
    .then(res => res.json())
    .then(data => console.log(data));
};


