document.addEventListener('DOMContentLoaded', () => {
  const API_BASE = '/api/v1/';
  const galleryGrid = document.querySelector('#gallery-grid');

  const fetchData = () => {
    fetch(`http://localhost:4000${API_BASE}/artboard/`)
      .then(stream => stream.json())
      .then(res => createGalleryItems(res))
      .catch(error => console.log('error', error));
  };

  fetchData();

  const createGalleryItems = (galleryData) => {
    // galleryData is array from GET req
    galleryData.forEach(galleryObj => {
      // create div element for gallery
      let galleryItem = document.createElement('div');
      galleryItem.setAttribute('class', 'gallery-item');

      // create shapes for the artwork
      let artworkData = JSON.parse(galleryObj.canvasData); 
      let numShapes = artworkData.length;
      for (let i = 0; i < numShapes; i++) {
        let shape = {
          id: i,
          x: artworkData[i].x,
          y: artworkData[i].y,
          h: artworkData[i].h,
          w: artworkData[i].w
        }
        console.log(shape.x/3)
        // TODO add math to reduce values of x, y, h, and w by /3
        let artworkShape = document.createElement('div');
        artworkShape.setAttribute('class', 'rect');
        artworkShape.setAttribute('style', `width:${shape.w}px; height:${shape.h}px; transform: translate(${shape.x}px,${shape.y}px)`);
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