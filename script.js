

const container = document.querySelector('.container');

for (let i = 0; i<16; i++) {
    const row = document.createElement('div');
    row.setAttribute('id','row');
    for (let j = 0; j<16; j++) {
        const col = document.createElement('div');
        col.setAttribute('id','col');
        row.appendChild(col);
    }
    container.appendChild(row);
}