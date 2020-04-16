document.addEventListener('DOMContentLoaded', () => {
  const API_BASE = '/api/v1/';
  const galleryGrid = document.querySelector('#gallery-grid');

  const fetchData = () => {
    fetch(`http://localhost:4000${API_BASE}/artboard/`)
      .then(stream => stream.json())
      .then(res => console.log(res))
      .catch(error => console.log('error', error));
  };

  fetchData();

});

// Fetch index of all gallery entries
// Create an array to hold all of them
// Render the first six of them



// When someone clicks on the // TODO make See More button
// Render the next six entries
// When there are no more entries