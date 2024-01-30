
const attachRows = document.querySelector('#attach-rows');
const colors = document.querySelectorAll('.colors');
const selectedColor = {
    tag : document.querySelector('#selected-color') ,
    value : 'bisque' ,
    setBackgroundColor : function (color) {
        this.value = color ;
        this.tag.style.backgroundColor = this.value ;
    }
}
const squares = {
    tags : function () {
        return document.querySelectorAll('.square');
    } , 
}
setUpTable(16, 16);

// change selectedColor's background color and and this.value's value
colors.forEach(color=> {
    color.addEventListener('click' , e=> {
        let backgroundColors= ['bisque' , 'black' , 'red'];
        switch (color.innerText ){
            case 'white' :
                selectedColor.setBackgroundColor(backgroundColors[0]);
                break ;
            case 'black' :
                selectedColor.setBackgroundColor(backgroundColors[1]);
                break;
            case 'red' :
                selectedColor.setBackgroundColor(backgroundColors[2]);
                break;
        }
    })
})

//change color of a single square using actual selectedColor.value's value
squares.tags().forEach(tag => {
    tag.addEventListener('click' , e=>{
        tag.style.backgroundColor = selectedColor.value ;
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
