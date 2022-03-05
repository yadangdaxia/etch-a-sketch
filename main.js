
makeSquare(30, 20);
// (columns, rows)

function makeSquare(x, y) {
  const gridContainer = document.querySelector('#grid-container');
  console.log(gridContainer);
  // gridContainer.classList.add('grid-container')
  for (let i = 0; i < x * y; i++) {
    let square = document.createElement('div');
    square.classList.add('square')
    // square.textContent = 'click to change color'
    gridContainer.appendChild(square);

    const radioButton = document.querySelectorAll('.form-check-input')
    radioButton.forEach((button) => {
      button.addEventListener('click', () => {
        if (document.getElementById('choose-color').checked) {
          console.log("choose color")
        }
        else if (document.getElementById('red-pen').checked) {
          // console.log("red")
          // redPen();
          square.addEventListener('mouseover', (e) => {
            e.currentTarget.classList.remove('blue')
            e.currentTarget.classList.remove('black')
            e.currentTarget.classList.add('red')
          })
        }
        else if (document.getElementById('black-pen').checked) {
          // console.log("black")
          // blackPen();
          square.addEventListener('mouseover', (e) => {
            e.currentTarget.classList.remove('blue')
            e.currentTarget.classList.remove('red')
            e.currentTarget.classList.add('black')
          })
        }
        else if (document.getElementById('blue-pen').checked) {
          // console.log("blue")
          // bluePen();
          square.addEventListener('mouseover', (e) => {
            e.currentTarget.classList.remove('red')
            e.currentTarget.classList.remove('black')
            e.currentTarget.classList.add('blue')
          })
        }
        else {
          console.log('nada')
        }
      })
    })
  };
};

// function blackPen() {
//   const divs = document.querySelectorAll('.square')
//   // console.log(divs);
//   divs.forEach ((div) => {

//     div.addEventListener('mouseover', (e) => {
//       e.currentTarget.classList.add('black')
//     })

//   })
// };

// function redPen() {
//   const divs = document.querySelectorAll('.square')
//   // console.log(divs);
//   divs.forEach((div) => {
//     div.addEventListener('mouseover', (e) => {
//       e.currentTarget.classList.add('red')
//     })
//   })
// };

// function bluePen() {
//   const divs = document.querySelectorAll('.square')
//   // console.log(divs);
//   divs.forEach((div) => {
//     div.addEventListener('mouseover', (e) => {
//       e.currentTarget.classList.add('blue')
//     })
//   })
// };
