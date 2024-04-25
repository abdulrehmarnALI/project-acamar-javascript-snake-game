const gridContainer = document.getElementById('gameContainer');
const gameGridSize = 24;
const fullGridSize = gameGridSize + 2;

function populateGrid() {
    for(let i = 0; i < fullGridSize*fullGridSize; i++) {
        let cell = document.createElement('div');
        gridContainer.appendChild(cell);
    }
}

function populateGrid2() {
    let borderDivClassname = 'borderCell'
    for(let row=0; row < fullGridSize; row++) {
        for(let column=0; column < fullGridSize; column++) {
            if(row === 0 | row === (fullGridSize-1) | column === 0 | column === (fullGridSize-1)){
                let cell = document.createElement('div')
                cell.classList.add(borderDivClassname)
                cell.id = 'pix'+toString(row)+toString(column);
                gridContainer.appendChild(cell)
            } 
        }
    }
}

function GridIntroAnimation() {

}

populateGrid2()