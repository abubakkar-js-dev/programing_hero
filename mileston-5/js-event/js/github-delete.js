document.getElementById('input-field').addEventListener('keyup',(event) =>{
    if(event.target.value === 'delete'){
        const deleteBtn = document.getElementById('delete-btn');
        deleteBtn.removeAttribute('disabled');
    }else{
        const deleteBtn = document.getElementById('delete-btn');
        deleteBtn.setAttribute('disabled',true);
    }
})

document.getElementById('delete-btn').addEventListener('click',() =>{
    const secrateInfo = document.getElementById('secrate-info');
    secrateInfo.style.display = 'none';
})