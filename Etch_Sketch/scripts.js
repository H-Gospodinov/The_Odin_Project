
const grid = document.querySelector('#grid');
const setGrid = document.querySelector('#setGrid');
const setGridTxt = 'Set the number of either horizontal or vertical cells. \nMaximum allowed is 64.';

let gridSize = 16; // default grid size is 16 x 16 cells

function createCells(number, size) {

    for (let i = 1; i <= number; i++) {

        const gridCell = document.createElement('div');

        gridCell.classList.add('grid-cell');
        grid.appendChild(gridCell);
    }
    grid.style.setProperty('--cell-size', size +'%');
}
createCells(gridSize ** 2, 100 / gridSize);

function resetGrid(newSize) {

    grid.replaceChildren(); // remove existing cells
    gridSize = newSize; // set new size
    createCells(gridSize ** 2, 100 / gridSize);
}

function userInput(input) {
    if (input == null) {
        return; // prompt cancelled
    }
    else if (!+input || input < 2 || input > 64) {
        alert('Please enter a number between 2 and 64');
        userInput(prompt(setGridTxt));
    }
    else {
        resetGrid(parseInt(input));
    }
}
setGrid.addEventListener('click', () => {

    userInput(prompt(setGridTxt));
});

grid.addEventListener('mouseover', (event) => {

    const randomColor = Math.floor(Math.random()*16777215).toString(16); // HEX
    event.target.style.setProperty('background-color', '#'+randomColor);
});
/* grid.addEventListener('mouseout', (event) => {

    setTimeout(function () {
        event.target.removeAttribute('style')
    }, 10000);
}); */