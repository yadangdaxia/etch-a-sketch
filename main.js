
const slider = document.getElementById('slider')
console.log(slider.value);


const sizeLabel = document.getElementById('size-label')
// console.log(sizeLabel);


slider.onchange = (e) => {
  // console.log(e.target.value, "on change")
  let gridSize = e.target.value;
  console.log(gridSize);
  sizeLabel.textContent = `${gridSize} x ${gridSize}`;

  const createGridButton = document.getElementById('create-grid')
  // console.log(createGridButton);
  createGridButton.addEventListener('click', (e) => {
    // console.log(e.currentTarget)

    const gridContainer = document.querySelector('#grid-container');
    console.log(gridContainer, "here is the grid container!")

    let node = document.querySelector('div.square');
    console.log(node, "node")

    gridContainer.innerHTML = '';
    makeSquare(gridSize, gridSize);
  });
}


function makeSquare(x, y) {
  const gridContainer = document.querySelector('#grid-container');
  // gridContainer.remove();
  console.log(gridContainer.style, "Can view all properties in console");
  gridContainer.style.gridTemplateColumns = `repeat(${slider.value}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${slider.value}, 1fr)`;
  // gridContainer.classList.add('grid-container')
  for (let i = 0; i < x * y; i++) {
    let square = document.createElement('div');
    square.classList.add('square')
    // square.textContent = 'click to change color'
    gridContainer.appendChild(square);


    let clearButton = document.getElementById('clear-all')
    clearButton.addEventListener('click', (e) => {
      console.log(e)
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
  // Took forever to figure out it needs to return an array.
  return [red,green,blue]
}
