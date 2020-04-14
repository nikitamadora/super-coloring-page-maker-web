document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello Developer! Check out my GitHub, and feel free to play!');
});

// ----------------------------------------------------
//                    Canvas Logic
// ----------------------------------------------------
const canvasForm = document.querySelector('#canvas-form');
let numShapes = document.querySelector('#num-shapes');

let getRandomNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const createCanvas = (e) => {
  e.preventDefault();
  console.log('Creating shapes!');
  const canvas = [];
  numShapes = numShapes.value;
  for (let i = 0; i < numShapes; i++) {
    let shape = {
      id: 0,
      x: 0,
      y: 0,
      h: 0,
      w: 0
    }
    shape.id = i;
    shape.x = getRandomNum(0, 300);
    shape.y = getRandomNum(0, 300);
    shape.h = getRandomNum(3, 250);
    shape.w = getRandomNum(3, 250);
    console.log(shape);
  }
  console.log(canvas);
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

