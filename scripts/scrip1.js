
const attachRows = document.querySelector('#attach-rows');
const colors = document.querySelectorAll('.colors');
const squares = {
    tags : function () {
        return document.querySelectorAll('.square');
    } , 
}
setUpTable(16, 16);

//change color of a single square using actual selectedColor.value's value
squares.tags().forEach(tag => {
    tag.addEventListener('mousemove' , e=>{
        let r = getNumber(256);
        let g = getNumber(256);
        let b = getNumber(256);
        tag.style.backgroundColor = `rgb(${r} , ${g} , ${b})`;
    })
})

// create rows and fill them with squares , squares have a define square class
function setUpTable(rowsNumber= 16 , elementsPerRow = 16){
    attachRows.innerText = '';
    let rows = [];
    for(let i = 0 ; i <= rowsNumber - 1  ; i ++){
        let row = document.createElement('div');
        row.setAttribute('class' , 'draw-table-rows');
        for(let i = 0 ; i <= elementsPerRow -1 ; i++){
            let box = document.createElement('div');
            box.setAttribute('class' , 'square');
            row.appendChild(box);
        }
        rows.push(row);  
    }
   
    rows.forEach(row=>{
        attachRows.appendChild(row);
    });
}    

function getNumber(max){
    return Math.floor(Math.random() * max)
}