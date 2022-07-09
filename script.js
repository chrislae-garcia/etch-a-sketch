const divContainer = document.querySelector('.container');
console.log(divContainer);

for (let row = 0; row < 16; row++) {
  const divSquareRow = document.createElement('div');
  divSquareRow.classList.add('row');
  divContainer.appendChild(divSquareRow);
  for (let col = 0; col < 16; col++) {
    const divSquareCol = document.createElement('div');
    divSquareCol.classList.add('col');
    divSquareRow.appendChild(divSquareCol);
  }
}

function fillBox(e) {
  console.log(e);
  e.target.style.backgroundColor = 'blue';

}

const boxes = document.querySelectorAll('.col');
boxes.forEach(box => box.addEventListener('mousedown', fillBox));