const rows = 8;
const columns = 8;



// const square = document.createElement('div');
//   console.log(square)
makeSquare(15, 15)



function makeSquare(x, y) {

  const gridContainer = document.querySelector('#grid-container');
  console.log(gridContainer);
  // gridContainer.classList.add('grid-container')

  for (let i = 0; i < x * y; i++) {
    let square = document.createElement('div');
    // console.log(square)
    square.classList.add('square')
    // square.textContent = 'click to change color'
    square.addEventListener('mouseover', (e) => {
      e.target.classList.add('black')
    });
    // square.classList.add('className')
    gridContainer.appendChild(square);
    // console.log(gridContainer)
  }

}
