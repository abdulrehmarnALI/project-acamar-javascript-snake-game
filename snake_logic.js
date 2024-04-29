const gridContainer = document.getElementById('gameContainer');
const gameGridSize = 24;
const fullGridSize = gameGridSize + 2;
let borderDivClass = 'borderCell';
let gameGridDivClass = 'gameCell';
let borderCellsArray = [];
let gameCellsArray = [];

function populateGrid() {
    for(let i = 0; i < fullGridSize*fullGridSize; i++) {
        let cell = document.createElement('div');
        gridContainer.appendChild(cell);
    }
}

// This function defines an array for the border cells so that they can be easily addressed in order (array is set to start from top left border cell and work clockwise around to the last border cell)
function defineBorderCellsGroup() {
    for(i=0; i < gameGridSize+2; i++) {
        borderCellsArray.push('x0y'+i)
    }
    for(j=1; j < gameGridSize+2; j++) {
        borderCellsArray.push('x'+j+'y'+(gameGridSize+1))
    }
    for(k=gameGridSize+1; k > 0; k--) {
        borderCellsArray.push('x'+(gameGridSize+1)+'y'+(k-1))
    }
    for(l=gameGridSize; l > 0; l--) {
        borderCellsArray.push('x'+l+'y0')
    }
    console.log(borderCellsArray)
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

function gameLoop() {}


function differentiateCells(array) {
    i=0;
    if(i >= 0) {
        setTimeout()
    }
}

function GridIntroAnimation2() {

}

// after starting the below function, thinking this could be more easily achived (maybe) bu utilising grid-template-areas
function GridIntroAnimation() {
    let childDivs = gridContainer.getElementsByTagName('div');
    // console.log(childDivs)
    for(i=0; i < childDivs.length; i++) {
        if(childDivs[i].classList.contains(borderDivClass)){
            console.log(childDivs[i])
            childDivs[i].style += '; background-color: green';
        }
    }
}


populateGrid2()
defineBorderCellsGroup()
GridIntroAnimation()