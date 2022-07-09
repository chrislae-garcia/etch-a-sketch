const body = document.querySelector('body');

let divContainer = document.querySelector('.container');
console.log(divContainer);

const btnEditGrid = document.getElementById('btn-edit-grid');

function promptGrid() {
  let gridSize = prompt('Set new grid size:');

  if (gridSize === null) return;
  else if (gridSize > 0 && gridSize <= 100) createGrid(gridSize);
  else alert('Please input a number between 1 to 100');
}

btnEditGrid.addEventListener('click', promptGrid);

function clearGrid() {
  const pixelGrid = document.querySelector('.container');
  body.removeChild(pixelGrid);
  console.log('test');
  divContainer = document.createElement('div');
  divContainer.classList.add('container');
  body.appendChild(divContainer);
}

function createGrid(gridSize = 16) {

  if (gridSize) clearGrid();
  for (let row = 0; row < gridSize; row++) {
    const divSquareRow = document.createElement('div');
    divSquareRow.classList.add('row');
    divContainer.appendChild(divSquareRow);
    for (let col = 0; col < gridSize; col++) {
      const divSquareCol = document.createElement('div');
      divSquareCol.classList.add('col');
      divSquareRow.appendChild(divSquareCol);
    }
  }
}

let isDrawing = false;
// color the pixel box on mouse click
window.addEventListener('mousedown', function (fillBox) {
  if (fillBox.target.className != 'col') return;
  fillBox.target.style.backgroundColor = 'blue';
  isDrawing = true;
});

// color the pixel boxes on mouse hold
window.addEventListener('mouseover', function (fillBox) {
  if (fillBox.target.className != 'col') return;
  if (isDrawing) fillBox.target.style.backgroundColor = 'blue';
});

// stop coloring the pixel boxes when mouse hold is released
window.addEventListener('mouseup', e => {
  if (isDrawing) isDrawing = false;
});

createGrid();