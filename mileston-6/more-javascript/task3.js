async function loadData(){
    const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=twopart');
    const data = await response.json();
    console.log(data);
}

loadData();