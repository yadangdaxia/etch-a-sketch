


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


    let clearButton = document.getElementById('clear-all')
    clearButton.addEventListener('click', (e) => {
      // console.log(e)
      square.style = `background-color: '#FFFFFF'`
      square.classList.add('white')
    })

    const radioButton = document.querySelectorAll('.form-check-input')
    radioButton.forEach((button) => {
      button.addEventListener('click', () => {
        if (document.getElementById('choose-color').checked) {
          // console.log("choose color")
          let colorWell = document.querySelector("#colorWell");
          // console.log(colorWell)
          colorWell.addEventListener("change", (e) => {
            let selectedColor = e.target.value;
            // console.log(selectedColor)
            square.addEventListener('mouseover', (e) => {
              e.currentTarget.style = `background-color: ${selectedColor}`
            })
          })
        }
        else if (document.getElementById('white-pen').checked) {
          // redPen();
          square.addEventListener('mouseover', (e) => {
            e.currentTarget.style.removeProperty('background-color');
            e.currentTarget.classList.remove('black')
            e.currentTarget.classList.add('white')
          })
        }
        else if (document.getElementById('black-pen').checked) {
          // blackPen();
          square.addEventListener('mouseover', (e) => {
            e.currentTarget.style.removeProperty('background-color');
            e.currentTarget.classList.remove('white')
            e.currentTarget.classList.add('black')
          })
        }
        else if (document.getElementById('rainbow-pen').checked) {
          // rainbowPen();
          square.addEventListener('mouseover', (e) => {

            e.currentTarget.classList.remove('white')
            e.currentTarget.classList.remove('black')
            e.currentTarget.style.removeProperty('background-color');
            const rainbowColor = generateRainbow();
            console.log(rainbowColor)
            // e.currentTarget.style = `background-color: rgb(200, 5, 99);opacity:0.6`
            e.currentTarget.style = `background-color: rgba(${rainbowColor}, 0.8)`;

          })
        }
        else {
          console.log('nada')
        }
      })
    })
  };


};



function generateRainbow() {
  let red = Math.floor(Math.random() * 255)
  let green = Math.floor(Math.random() * 255)
  let blue = Math.floor(Math.random() * 255)
  // let opacity = Math.floor(Math.random() * 100)/100
  // let opacity = 1
  // Took forever to figure out it needs to be an array.
  return [red,green,blue]
}





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
