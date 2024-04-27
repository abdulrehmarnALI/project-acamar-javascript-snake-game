const gridContainer = document.getElementById('gameContainer');
const gameGridSize = 24;
const fullGridSize = gameGridSize + 2;
let borderDivClass = 'borderCell';
let gameGridDivClass = 'gameCell'

function populateGrid() {
    for(let i = 0; i < fullGridSize*fullGridSize; i++) {
        let cell = document.createElement('div');
        gridContainer.appendChild(cell);
    }
}

function populateGrid2() {
    // have set a variable to cell type class names so they can easily be changed in the future
    // whilst stepping through each row, also step through each column
    // this ensures all cells have been stepped through
    for(let row=0; row < fullGridSize; row++) {
        // cell row-col value pairs represent game grid x-y coordinate pairs
        for(let column=0; column < fullGridSize; column++) {
            let cell = document.createElement('div')
            if(row === 0 | row === (fullGridSize-1) | column === 0 | column === (fullGridSize-1)){
                cell.classList.add(borderDivClass)
                cell.id = 'x'+row.toString()+'y'+column.toString();
                gridContainer.appendChild(cell)
            }
            else {
                cell.className = gameGridDivClass
                cell.classList.add(gameGridDivClass)
                cell.id = 'x'+row.toString()+'y'+column.toString();
                gridContainer.appendChild(cell)
            }
        }
    }
}


// after starting the below function, thinking this could be more easily achived (maybe) bu utilising grid-template-areas
function GridIntroAnimation() {
    let childDivs = gridContainer.getElementsByTagName('div');
    // console.log(childDivs)
    for(i=0; i < childDivs.length; i++) {
        if(childDivs[i].classList.contains(borderDivClass)){
            console.log(childDivs[i])
            childDivs[i].style += '; background-color: red';
        }
    }
}

populateGrid2()
GridIntroAnimation()