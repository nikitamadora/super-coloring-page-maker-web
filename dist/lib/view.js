'use strict';

document.addEventListener('DOMContentLoaded', function () {
  var API_BASE = '/api/v1';
  var artboardId = window.location.pathname.split('/')[2];
  var canvas = document.querySelector('.canvas');

  var fetchData = function fetchData() {
    fetch(API_BASE + '/artboard/' + artboardId).then(function (stream) {
      return stream.json();
    }).then(function (res) {
      return recreateCanvas(res);
    }).catch(function (error) {
      return console.log('error', error);
    });
  };

  fetchData();

  var recreateCanvas = function recreateCanvas(canvasObj) {
    var importedData = JSON.parse(canvasObj.canvasData);
    var numShapes = importedData.length;

    for (var i = 0; i < numShapes; i++) {
      var shape = {
        id: i,
        type: importedData[i].type,
        x: importedData[i].x,
        y: importedData[i].y,
        h: importedData[i].h,
        w: importedData[i].w
      };

      var domShape = document.createElement('div');
      domShape.classList.add('shape', '' + shape.type);
      if (shape.type === 'rectangle' || shape.type === 'oval') {
        domShape.setAttribute('style', 'width:' + shape.w + 'px; height:' + shape.h + 'px; transform: translate(' + shape.x + 'px,' + shape.y + 'px)');
      } else if (shape.type === 'circle' || shape.type === 'square') {
        domShape.setAttribute('style', 'width:' + shape.w + 'px; height:' + shape.w + 'px; transform: translate(' + shape.x + 'px, ' + shape.y + 'px');
      }
      canvas.appendChild(domShape);
    }
  };
});