document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello Developer! Check out my GitHub, and feel free to play!');
});

// ----------------------------------------------------
//                    Canvas Logic
// ----------------------------------------------------
const canvasForm = document.querySelector('#canvas-form');
const canvas = document.querySelector('#canvas');
let numShapes = document.querySelector('#num-shapes');

let getRandomNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};
const canvasData = [];
const createCanvas = (e) => {
  e.preventDefault();
  console.log('Creating shapes!');
  // const canvas = [];
  numShapes = numShapes.value;
  for (let i = 0; i < numShapes; i++) {
    let shape = {
      id: i,
      x: getRandomNum(-50, 500),
      y: getRandomNum(-50, 500),
      h: getRandomNum(3, 250),
      w: getRandomNum(3, 250)
    }
    canvasData.push(shape);
    let domShape = document.createElement('div');
    domShape.setAttribute('class', 'rect');
    domShape.setAttribute('style', `width:${shape.w}px; height:${shape.h}px; transform: translate(${shape.x}px,${shape.y}px`);
    canvas.appendChild(domShape);
  }
  console.log(canvasData);
};

// -------------------------------------- Event Listeners
canvasForm.addEventListener('submit', createCanvas);





// ------------------------------------------------- API Requests

// const recreateButton = document.querySelector("#recreate-btn");
const endpoint = 'http://localhost:4000/api/v1/artboard'

const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

// Fetches all artboard data
// recreateButton.addEventListener('click', () => {
//   fetch("http://localhost:4000/api/v1/artboard", requestOptions)
//     .then(response => response.json())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));
// });

