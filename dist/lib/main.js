'use strict';

document.addEventListener('DOMContentLoaded', function () {
  console.log('Hello Developer! Check out my GitHub, and feel free to play!');
});

// ----------------------------------------------------
//                    Canvas Logic
// ----------------------------------------------------
var canvasForm = document.querySelector('#canvas-form');
var numShapes = document.querySelector('#num-shapes');

var getRandomNum = function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

var createCanvas = function createCanvas(e) {
  e.preventDefault();
  console.log('Creating shapes!');
  var canvas = [];
  numShapes = numShapes.value;
  for (var i = 0; i < numShapes; i++) {
    var shape = {
      id: i,
      x: getRandomNum(0, 300),
      y: getRandomNum(0, 300),
      h: getRandomNum(3, 250),
      w: getRandomNum(3, 250)
      // shape.id = i
    };console.log(shape);
  }
  console.log(canvas);
};

// -------------------------------------- Event Listeners
canvasForm.addEventListener('submit', createCanvas);

// ------------------------------------------------- API Requests

// const recreateButton = document.querySelector("#recreate-btn");
var endpoint = 'http://localhost:4000/api/v1/artboard';

var requestOptions = {
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