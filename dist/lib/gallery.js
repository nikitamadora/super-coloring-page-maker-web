'use strict';

document.addEventListener('DOMContentLoaded', function () {
  var API_BASE = '/api/v1';
  var galleryGrid = document.querySelector('#gallery-grid');

  var fetchData = function fetchData() {
    fetch(API_BASE + '/artboard/').then(function (stream) {
      return stream.json();
    }).then(function (res) {
      return createGalleryItems(res);
    }).catch(function (error) {
      return console.log('error', error);
    });
  };

  fetchData();

  var createGalleryItems = function createGalleryItems(galleryData) {
    // galleryData is array from GET req
    galleryData.forEach(function (galleryObj) {
      // create div element for gallery
      var galleryItem = document.createElement('a');
      var artworkID = galleryObj._id;
      galleryItem.classList.add('gallery-item');
      galleryItem.setAttribute('href', '/view/' + artworkID);

      // create shapes for the artwork
      var artworkData = JSON.parse(galleryObj.canvasData);
      var numShapes = artworkData.length;
      for (var i = 0; i < numShapes; i++) {
        var shape = {
          id: i,
          type: artworkData[i].type,
          x: artworkData[i].x,
          y: artworkData[i].y,
          h: artworkData[i].h,
          w: artworkData[i].w
        };
        var artworkShape = document.createElement('div');
        artworkShape.classList.add('shape', '' + shape.type);
        if (shape.type === 'rectangle' || shape.type === 'oval') {
          artworkShape.setAttribute('style', 'width:' + shape.w / 3 + 'px; height:' + shape.h / 3 + 'px; transform: translate(' + shape.x / 3 + 'px,' + shape.y / 3 + 'px)');
        } else if (shape.type === 'circle' || shape.type === 'square') {
          artworkShape.setAttribute('style', 'width:' + shape.w / 3 + 'px; height:' + shape.w / 3 + 'px; transform: translate(' + shape.x / 3 + 'px, ' + shape.y / 3 + 'px');
        };
        galleryItem.appendChild(artworkShape);
      }

      galleryGrid.appendChild(galleryItem);
    });
  };
});

//// Fetch index of all gallery entries
// Create an array to hold all of them
// Render the first six of them


// When someone clicks on the // TODO make See More button
// Render the next six entries
// When there are no more entries