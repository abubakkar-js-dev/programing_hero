document.body.style.background = "lightgray";

// Option 1: direct add onclick on html file


//  option 2: add function by onlick
function makeRed(){
    document.body.style.backgroundColor = "red"
}


// option 3: 

const makeGreen = document.getElementById('blue-bg-button') ;

makeGreen.onclick = makeBgGreen;


function makeBgGreen(){
    document.body.style.backgroundColor = "lightgreen";
}

// option 4:

const purpleBgButton = document.getElementById('make-bg-purple')

purpleBgButton.onclick =  function makePurple(){
    document.body.style.backgroundColor = "purple";
}

// option ultra 4. onclick event by addeventlister event handeller

const pinkBgButton = document.getElementById('make-bg-pink');

pinkBgButton.addEventListener('click',function(){
    document.body.style.backgroundColor = "pink";
})


const yellowBgButton = document.getElementById('make-bg-yellow');

yellowBgButton.addEventListener('click',makebgYellow);


function makebgYellow(){
    document.body.style.backgroundColor = "Yellow";
}


document.getElementById('make-bg-goldenrod').addEventListener('click',() =>{
    document.body.style.backgroundColor = 'goldenrod';
})