document.addEventListener('DOMContentLoaded', () => {
  const API_BASE = '/api/v1';
  // const artboardId = window.location.pathname.split('/')[1];
  // console.log(artboardId);
  const canvas = document.querySelector('.canvas');
  const canvasData = [];
  let numShapes = document.querySelector('#num-shapes');

  const recreateCanvas = () => {
    console.log('Rebuilding Canvas!');
    // Send GET request, including ID of artboard
    fetch(`${API_BASE}/artboard/${artboardId}`)
      .then(stream => stream.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
    // const canvas = [];
    // numShapes = numShapes.value;
    // for (let i = 0; i < numShapes; i++) {
    //   let shape = {
    //     id: i,
    //     x: getRandomNum(-50, 500),
    //     y: getRandomNum(-50, 500),
    //     h: getRandomNum(3, 250),
    //     w: getRandomNum(3, 250)
    //   }
    //   canvasData.push(shape);
    //   let domShape = document.createElement('div');
    //   domShape.setAttribute('class', 'rect');
    //   domShape.setAttribute('style', `width:${shape.w}px; height:${shape.h}px; transform: translate(${shape.x}px,${shape.y}px`);
    //   canvas.appendChild(domShape);
    // }
    // console.log(canvasData);
  // };

});