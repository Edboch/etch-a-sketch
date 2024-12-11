const grid = document.querySelector('.grid');
const eraseBtn = document.querySelector('.resize');
const colourBtn = document.querySelector('.random-colour');
const clearBtn = document.querySelector('.clear')
const eraserBtn = document.querySelector('.eraser');
let colour  = randomColour();
let mouseHold = false;
let squares = 16;

document.body.onmousedown = (event) => {
    mouseHold = true;
    event.preventDefault();
};
document.body.onmouseup = () => {mouseHold = false};

// Initial Grid
drawGrid(squares);

// Event Listeners
eraseBtn.addEventListener('click',() => {
    squares = prompt('How many squares do you want on each side?');
    clearGrid();
    drawGrid(squares);
})

grid.addEventListener('mousedown',colourCell);
grid.addEventListener('mouseover',colourCell);

colourBtn.addEventListener('click', () => {
    colour = randomColour();
})

clearBtn.addEventListener('click',() => {
    clearGrid();
    drawGrid(squares);
})

eraserBtn.addEventListener('click',()=> {
    colour = 'rbg(255,255,255)';
})

// Functions
function clearGrid() {
    grid.innerHTML = '';
}

function drawGrid(squares) {
    for (let i = 0; i<squares; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        for (let j = 0; j<squares; j++) {
            const col = document.createElement('div');
            col.className = 'col';
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