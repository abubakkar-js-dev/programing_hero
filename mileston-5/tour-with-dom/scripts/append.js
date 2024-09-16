const placesList = document.getElementById('places-list');

let newPlace = document.createElement('li');
newPlace.innerText = "Paharpur";
newPlace.style.color = 'white';
newPlace.style.fontSize = '18px';

// add the child
placesList.appendChild(newPlace);

const main = document.querySelector('main');
const newSection = document.createElement('section');

let newHeader = document.createElement('h2');
newHeader.innerText = "My Favortie Books";
newSection.appendChild(newHeader);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = "Bangla Literature";
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = "Progamming Books";
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = "Story And Drama Books";
ul.appendChild(li3);

newSection.appendChild(ul);

main.appendChild(newSection);



//  direct set in innerHTML

let favoriteGamesSection = document.createElement('section');
favoriteGamesSection.innerHTML = `
    <h2>My Favorite Games</h2>
    <ul>
        <li>The Project IGI</li>
        <li>Shadow Fight</li>
        <li>Call of duty</li>
    </ul>
`;

main.appendChild(favoriteGamesSection);
console.log(favoriteGamesSection);
console.log(newSection);

