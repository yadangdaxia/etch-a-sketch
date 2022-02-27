const rows = 8;
const columns = 8;

const gridContainer = document.querySelector('#grid-container');
  console.log (gridContainer);

// const square = document.createElement('div');
//   console.log(square)
makeSquare(5, 8)



function makeSquare(x, y) {

  for (let i = 0; i < x * y; i++) {
    let square = document.createElement('div');
    // console.log(square)
    square.classList.add('square')
    // square.textContent = 'click to change color'
    square.addEventListener('mouseenter', (e) => {
      e.target.classList.toggle('active')
    });
    // square.classList.add('className')
    gridContainer.appendChild(square);
    // console.log(gridContainer)
  }

}
