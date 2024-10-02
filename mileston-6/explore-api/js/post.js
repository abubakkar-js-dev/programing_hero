function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}

function displayPosts(posts){
    const postContainer = document.getElementById('posts-container');
    for(let post of posts){
        const div = document.createElement('div');
        div.innerHTML = `
            <h4>User- ${post.id} </h4>
            <h5>Post Title: ${post.title} </h5>
            <p>Post Descripton: ${post.body}</p>
        
        `;
        postContainer.appendChild(div);
        div.classList.add('post');
    }
}

loadPosts();