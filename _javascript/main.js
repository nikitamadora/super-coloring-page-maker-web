document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello Developer! Check out my GitHub, and feel free to play around!');
});

// ----------------------------------------------------
//                    Canvas Logic
// ----------------------------------------------------

const canvas = document.querySelector('.canvas');
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

// ----------------------------------------------------- Buttons
const canvasForm = document.querySelector('#canvas-form');
canvasForm.addEventListener('submit', createCanvas);

// ------------------------------------- Add to Collection

const addToCollection = () => {
  console.log('Button Clicked!');
  let exportableString = JSON.stringify(canvasData);

  let exportableData = new URLSearchParams();
  exportableData.append("canvasData", `${exportableString}`);

  let postOptions = {
    method: 'POST',
    body: exportableData,
    redirect: 'follow'
  };

  fetch("http://localhost:4000/api/v1/artboard", postOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  // TODO Convert to a modal with an escape 'x'
  console.log('Thanks for your submission!');
};


const collectionButton = document.querySelector('#collection-btn');
collectionButton.addEventListener('click', addToCollection);




// ------------------------------------------------- API Requests

// const recreateButton = document.querySelector("#recreate-btn");
const endpoint = 'http://localhost:4000/api/v1/artboard'

// const requestOptions = {
//   method: 'GET',
//   redirect: 'follow'
// };

// Fetches all artboard data
// recreateButton.addEventListener('click', () => {
//   fetch("http://localhost:4000/api/v1/artboard", requestOptions)
//     .then(response => response.json())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));
// });

