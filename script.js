const divContainer = document.querySelector('.container');
console.log(divContainer);

const btnEditGrid = document.getElementById('btn-edit-grid');

function promptGrid() {
  let gridSize = prompt('Set new grid size:');

  if (gridSize > 100) alert('Grid size cannot exceed 100');
  createGrid(gridSize);
}

btnEditGrid.addEventListener('click', promptGrid);

function createGrid(grid=16) {
    for (let row = 0; row < grid; row++) {
    const divSquareRow = document.createElement('div');
    divSquareRow.classList.add('row');
    divContainer.appendChild(divSquareRow);
    for (let col = 0; col < grid; col++) {
      const divSquareCol = document.createElement('div');
      divSquareCol.classList.add('col');
      divSquareRow.appendChild(divSquareCol);
    }
  }
}

let isDrawing = false;
// color the pixel box on mouse click
window.addEventListener('mousedown', function(fillBox) {
  if (fillBox.target.className != 'col') return; 
  fillBox.target.style.backgroundColor = 'blue';
  isDrawing = true;
});

// color the pixel boxes on mouse hold
window.addEventListener('mouseover', function(fillBox) {
  if (fillBox.target.className != 'col') return;
  if (isDrawing) fillBox.target.style.backgroundColor = 'blue';
});

// stop coloring the pixel boxes when mouse hold is released
window.addEventListener('mouseup', e => {
  if (isDrawing) isDrawing = false;
});