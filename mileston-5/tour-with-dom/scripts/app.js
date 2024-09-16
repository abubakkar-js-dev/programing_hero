const sections = document.querySelectorAll('section');
console.log(sections.length);
const sectionLi = document.querySelectorAll('section ul li');

for(let section of sections){
    section.style.border = '2px solid lightcoral';
    section.style.marginBottom = '15px';
    section.style.padding ='7px';
    section.style.borderRadius = '12px';
    section.classList.add('bg-light-green');
    
}

const fruitsContainer = document.getElementById('fruits-wrap');
console.log(fruitsContainer);
const fruitList =document.getElementById('fruits-list');

let newFruits = document.createElement("li");
newFruits.innerText = 'Jack-fruits';
newFruits.style.color = "white";
newFruits.style.fontSize = "18px";

fruitList.appendChild(newFruits);

for(let li of sectionLi){
    li.style.color = "white";
    li.style.fontSize = "18px";
    li.style.marginBottom = "5px";
    li.style.letterSpacing = '1.5';
    li.style.lineHeight = '1.3';
}



