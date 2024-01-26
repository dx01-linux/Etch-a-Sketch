
const attachRows = document.querySelector('#attach-rows');

function setUpTable(rowsNumber= 16 , elementsPerRow = 16){
    attachRows.innerText = '';
    let rows = [];
    for(let i = 0 ; i <= rowsNumber - 1  ; i ++){
        let row = document.createElement('div');
        row.setAttribute('class' , 'draw-table-rows');
        for(let i = 0 ; i <= elementsPerRow -1 ; i++){
            let box = document.createElement('div');
            box.setAttribute('class' , 'white-background square');
            row.appendChild(box);
        }
        rows.push(row);  
    }
   
    rows.forEach(row=>{
        attachRows.appendChild(row);
    });
    return document.querySelectorAll('.square');
}    

function swampToWhite(target){
    if(target.getAttribute('class') == 'black-background square'){
        target.setAttribute('class' , 'white-background square');
        target.addEventListener('click' , swampToBlack(target))
    }
}
function swampToBlack(target){
    if(target.getAttribute('class') == 'white-background square'){
        target.setAttribute('class' , 'black-background square');
        target.addEventListener('click' , swampToWhite(target))
    }
}
function swamp(target){
    if(target.getAttribute('class') == 'black-background square'){
        swampToWhite(target);
    } else if(target.getAttribute('class') == 'white-background square'){
        swampToBlack(target);
    }
}
const squares = setUpTable(16 , 16).forEach(square => {
    if(square.getAttribute('class') == 'white-background square'){
        square.addEventListener('click' , e=>{
                swamp(square);
        });
    }
});


