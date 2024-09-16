const main = document.getElementById('main-container');


const newSection = document.createElement('section');
const newHeading = document.createElement('h2');
newHeading.classList.add('section-title');
newHeading.innerText = "Section title-4";
newSection.appendChild(newHeading);

const ul = document.createElement('ul');
const newli = document.createElement('li');
newli.innerText = 'SomeThing is happening bro';
ul.appendChild(newli);

newSection.appendChild(ul)
main.appendChild(newSection);


const allTitles = document.getElementsByClassName('section-title');
console.log(allTitles);

for(let title of allTitles ){
    title.style.color = "tomato";
    title.style.fontSize = '28px';
}

const allLi = document.getElementsByTagName('li');

for(let li of allLi){
    li.style.color = 'gray';
    li.style.fontSize = '18px';
}