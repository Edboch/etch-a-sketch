const grid = document.querySelector('.grid');
const resize = document.querySelector('#resize');
const colourBtn = document.querySelector('#random-colour');
let colour  = randomColour();
let mouseHold = false;

document.body.onmousedown = (event) => {
    mouseHold = true;
    event.preventDefault();
};
document.body.onmouseup = () => {mouseHold = false};

// Initial Grid
drawGrid(16,16);

// Event Listeners
resize.addEventListener('click',() => {
    let squares = prompt('How many squares do you want on each side?');
    clearGrid();
    drawGrid(squares);
})

grid.addEventListener('mousedown',colourCell);
grid.addEventListener('mouseover',colourCell);

colourBtn.addEventListener('click', () => {
    colour = randomColour();
})

// Functions
function clearGrid() {
    grid.innerHTML = '';
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
        grid.appendChild(row);
    }
}

function randomColour() {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`
}

function colourCell(e) {
    if (e.type === 'mouseover' && !mouseHold) return
    e.target.setAttribute('style',`background-color: ${colour};`);
}