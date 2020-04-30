document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello Developer! Check out my GitHub, and feel free to play around!');
});

// ----------------------------------------------------
//                    Canvas Logic
// ----------------------------------------------------

const canvas = document.querySelector('.canvas');
const canvasForm = document.querySelector('#canvas-form');
let numShapesEl = document.querySelector('#num-shapes');

let getRandomNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

let canvasData = [];
const createCanvas = (e) => {
  e.preventDefault();
  let userShapeChoice = canvasForm.querySelector('input[type=radio]:checked').value;
  let numShapes = numShapesEl.value;
  for (let i = 0; i < numShapes; i++) {
    let shape = {
      id: i,
      type: userShapeChoice,
      x: getRandomNum(-100, 500),
      y: getRandomNum(-100, 600),
      h: getRandomNum(3, 350),
      w: getRandomNum(3, 350)
    }
    // Adds `shape` object to array for both rendering shapes in canvas now, and exporting to db for later retrieval
    canvasData.push(shape);

    let domShape = document.createElement('div');
    domShape.classList.add('shape', `${shape.type}`);
    if (shape.type === 'rectangle' || shape.type === 'oval') {
      domShape.setAttribute('style', `width:${shape.w}px; height:${shape.h}px; transform: translate(${shape.x}px,${shape.y}px)`);
    } else if (shape.type === 'circle' || shape.type === 'square') {
      domShape.setAttribute('style', `width:${shape.w}px; height:${shape.w}px; transform: translate(${shape.x}px, ${shape.y}px`);
    };
      canvas.appendChild(domShape);
  };
};

canvasForm.addEventListener('submit', createCanvas);

// ------------------------------------------- Clear Canvas
const clearButton = document.querySelector('#clear-button');

const clearCanvas = () => {
  canvas.innerHTML = '';
  canvasData = [];
};

clearButton.addEventListener('click', clearCanvas);


// --------------------------------
//             Buttons
// --------------------------------
// --------------------------------------- Print / Screenshot View
const printButton = document.querySelector('#print-btn');
printButton.addEventListener('click', () => {
  window.print();
});

// --------------------------------------------- Add to Collection

const collectionButton = document.querySelector('#collection-btn');

const addToCollection = () => {
  let canvasContents = document.querySelector('.canvas').children;
  if (canvasContents.length > 0) {
    let exportableString = JSON.stringify(canvasData);

    let exportableData = new URLSearchParams();
    exportableData.append("canvasData", `${exportableString}`);

    let postOptions = {
      method: 'POST',
      body: exportableData,
      redirect: 'follow'
    };

    fetch("/api/v1/artboard", postOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    
    alert('Thank you for your submission!');
  } else {
    alert('Sorry! As subjectively lovely as a blank canvas is, you may not submit one to the collection.');
  }
};

collectionButton.addEventListener('click', addToCollection);