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
      let galleryItem = document.createElement('a');
      let artworkID = galleryObj._id;
      console.log(artworkID);
      galleryItem.setAttribute('class', 'gallery-item');
      galleryItem.setAttribute('href', `/view/${artworkID}`);

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
        // TODO add math to reduce values of x, y, h, and w by /3
        let artworkShape = document.createElement('div');
        artworkShape.setAttribute('class', 'rect');
        artworkShape.setAttribute('style', `width:${shape.w/3}px; height:${shape.h/3}px; transform: translate(${shape.x/3}px,${shape.y/3}px)`);
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