const canvas = {
    baseColor : {
        innerText : 'whitesmoke' 
    } ,
    addTitles : function(totalTitles){
        let canvas = document.querySelector('#canvas');
        let titles = [];
        for(let title = 0 ; title <= totalTitles -1 ; title ++){
            let div = document.createElement('div');
            div.className = 'title';
            titles.push(div);
        }
        titles.forEach(title => {
            canvas.appendChild(title)
        });
    },
    cleanTitles : function(){
        document.querySelectorAll('.title').forEach(title => {
            title.style.backgroundColor = '';
        });
    } ,
    erase : function(target){
        colorPalette.select(this.baseColor);
    }
    
};
const colorPalette = {
    colorSelected : undefined ,
    // colorSelectedC : 
    //     this.colorSelected.style.backgroundColor.slice(" ").join() ,
    
    select : function(color = HTMLElement){
        //select other color 
        if(this.colorSelected == undefined){
            this.colorSelected = color;
        }
        this.colorSelected.style = '';
        this.colorSelected = color ;
        color.style.color = 'black';
        color.style.backgroundColor = color.innerText.toLowerCase();
        if(color.innerText == ' Black' || color.innerText == ' White'){
            color.style.color = "white";
            color.style.backgroundColor = 'gray';
        }
    
    },

};
//fill canvas with titles
canvas.addTitles((25*25));

//events

//color palette -> select a color
document.querySelector('#color-palette').addEventListener("click" , eve =>{
    let target = eve.target ;
    if(target.className == 'color'){
        colorPalette.select(target)     
    }
});
// canvas -> color a title
document.querySelector("#canvas").addEventListener("click" , eve=>{
    let target = eve.target;
    if(target.className == 'title'){
        //change color 
        if (target.style.backgroundColor != colorPalette.colorSelected.innerText.toLowerCase()) {
            target.style.backgroundColor = colorPalette.colorSelected.innerText.toLowerCase();
        }
    }
});
// bttn-panel : 
document.querySelector('#bttn-panel').addEventListener("click" , eve => {
    let target = eve.target;
    switch(target.innerText){
        case ' Delete' : 
        //clean canvas
            canvas.cleanTitles();
            break;
        case ' Erase' :
        //erase mode
            canvas.erase();
            break;
    }
});