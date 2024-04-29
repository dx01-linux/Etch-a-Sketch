const canvas = {
    tag : document.querySelector('#canvas') ,
    addTitles : function(totalTitles){
        let titles = [];
        for(let title = 0 ; title <= totalTitles -1 ; title ++){
            let div = document.createElement('div');
            div.className = 'title';
            titles.push(div);
        }
        titles.forEach(title => {
            this.tag.appendChild(title)
        });
    }
}

//fill canvas with titles
canvas.addTitles((25*25));