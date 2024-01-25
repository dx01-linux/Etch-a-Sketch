/*
For row Of rows : 
    For Of of rows :    
        1) assamble box
            - set html-structure
            - set class to box for styling with css
        2) add box to talet
            -select parent and add it to it
    
    3) add new row to table
*/
let tablet = document.querySelector('#tablet');
function setUpTable(rowsNumber= 16 , elementsPerRow = 16){
    let rows = [];
    for(let i = 0 ; i <= rowsNumber - 1  ; i ++){
        let row = document.createElement('div');
        row.setAttribute('class' , 'row');
        for(let i = 0 ; i <= elementsPerRow -1 ; i++){
            let box = document.createElement('div');
            box.setAttribute('class' , 'box');
            row.appendChild(box);
        }
        rows.push(row);  
    }
    
    rows.forEach(row=>{
        tablet.appendChild(row);
    });
}
