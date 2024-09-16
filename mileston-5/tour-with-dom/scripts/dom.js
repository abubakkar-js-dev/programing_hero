const fruitsTitle = document.getElementById('fruits-title')
const placesTitle = document.getElementById('places-title');
const fruitsElements = document.getElementsByClassName('favorite-fruit');
fruitsTitle.style.padding = '7px';
fruitsTitle.style.textAlign = 'center';
fruitsTitle.style.backgroundColor = 'burlywood';
fruitsTitle.style.color = 'white';

const title = fruitsTitle.getAttribute('class');
// fruitsTitle.setAttribute('class','bal-chal')
fruitsTitle.classList.add('hello-world');
fruitsTitle.classList.remove('aro','ache')
console.log(fruitsTitle.classList);

console.log(fruitsTitle);
console.log(placesTitle);
console.log(fruitsElements);
// console.log(fruitsElements.length)

fruitsTitle.innerText = "Fruits I like....";

for(const fruit of fruitsElements){
    console.log(fruit.innerHTML);
}


//  with querySelectorAll
const places = document.querySelectorAll('.places li');

console.log(places);


for(const place of places){
    console.log(place.innerText);
    place.style.color = 'lightgray';
}

const allDivs = document.querySelector('section');
console.log(allDivs.childNodes);


const newParagrap = document.createElement('p').innerHTML = 'Hello word';
console.log(newParagrap);

const placesContainer = document.getElementById('places-wrap');
console.log(placesContainer);


//

