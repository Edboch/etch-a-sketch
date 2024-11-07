const container = document.querySelector('.container');
const resize = document.querySelector('#resize');
// Initial Grid
drawGrid(16,16);

resize.addEventListener('click',() => {
    let squares = prompt('How many squares do you want on each side?');
    clearGrid();
    drawGrid(squares);
})

container.addEventListener('mouseover',(event) =>{
    event.target.setAttribute('style','background-color: red;');
})

function clearGrid() {
    container.innerHTML = '';
}

function drawGrid(squares) {
    for (let i = 0; i<squares; i++) {
        const row = document.createElement('div');
        row.setAttribute('id','row');
        for (let j = 0; j<squares; j++) {
            const col = document.createElement('div');
            col.setAttribute('id','col');
            row.appendChild(col);
        }
        container.appendChild(row);
    }
    
}