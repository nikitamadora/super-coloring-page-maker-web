'use strict';

document.addEventListener('DOMContentLoaded', function () {
  console.log('Hello Developer! Check out my GitHub, and feel free to play around!');
});

// ----------------------------------------------------
//                    Canvas Logic
// ----------------------------------------------------

var canvas = document.querySelector('.canvas');
var canvasForm = document.querySelector('#canvas-form');
var numShapesEl = document.querySelector('#num-shapes');

var getRandomNum = function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

var canvasData = [];
var createCanvas = function createCanvas(e) {
  e.preventDefault();
  var userShapeChoice = canvasForm.querySelector('input[type=radio]:checked').value;
  var numShapes = numShapesEl.value;
  for (var i = 0; i < numShapes; i++) {
    var shape = {
      id: i,
      type: userShapeChoice,
      x: getRandomNum(-100, 500),
      y: getRandomNum(-100, 600),
      h: getRandomNum(3, 350),
      w: getRandomNum(3, 350)
      // Adds `shape` object to array for both rendering shapes in canvas now, and exporting to db for later retrieval
    };canvasData.push(shape);

    var domShape = document.createElement('div');
    domShape.classList.add('shape', '' + shape.type);
    if (shape.type === 'rectangle' || shape.type === 'oval') {
      domShape.setAttribute('style', 'width:' + shape.w + 'px; height:' + shape.h + 'px; transform: translate(' + shape.x + 'px,' + shape.y + 'px)');
    } else if (shape.type === 'circle' || shape.type === 'square') {
      domShape.setAttribute('style', 'width:' + shape.w + 'px; height:' + shape.w + 'px; transform: translate(' + shape.x + 'px, ' + shape.y + 'px');
    };
    canvas.appendChild(domShape);
  };
};

canvasForm.addEventListener('submit', createCanvas);

// ------------------------------------------- Clear Canvas
var clearButton = document.querySelector('#clear-button');

var clearCanvas = function clearCanvas() {
  canvas.innerHTML = '';
  canvasData = [];
};

clearButton.addEventListener('click', clearCanvas);

// --------------------------------
//             Buttons
// --------------------------------
// --------------------------------------- Print / Screenshot View
var printButton = document.querySelector('#print-btn');
printButton.addEventListener('click', function () {
  window.print();
});

// --------------------------------------------- Add to Collection

var collectionButton = document.querySelector('#collection-btn');

var addToCollection = function addToCollection() {
  var canvasContents = document.querySelector('.canvas').children;
  if (canvasContents.length > 0) {
    var exportableString = JSON.stringify(canvasData);

    var exportableData = new URLSearchParams();
    exportableData.append("canvasData", '' + exportableString);

    var postOptions = {
      method: 'POST',
      body: exportableData,
      redirect: 'follow'
    };

    fetch("/api/v1/artboard", postOptions).then(function (response) {
      return response.json();
    }).then(function (result) {
      return console.log(result);
    }).catch(function (error) {
      return console.log('error', error);
    });

    alert('Thank you for your submission!');
  } else {
    alert('Sorry! As subjectively lovely as a blank canvas is, you may not submit one to the collection.');
  }
};

collectionButton.addEventListener('click', addToCollection);