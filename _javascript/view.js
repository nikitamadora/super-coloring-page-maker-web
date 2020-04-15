document.addEventListener('DOMContentLoaded', () => {
  const API_BASE = '/api/v1';
  const artboardId = window.location.pathname.split('/')[2];
  // console.log(artboardId);
  const canvas = document.querySelector('.canvas');

  const fetchData = () => {
    console.log('Rebuilding Canvas!');
    // Send GET request, including ID of artboard
    fetch(`http://localhost:4000${API_BASE}/artboard/${artboardId}`)
      .then((stream) => stream.json())
      .then(res => recreateCanvas(res))
      .catch(error => console.log('error', error));
  }

  fetchData();

  const recreateCanvas = (canvasObj) => {
    // const shapeTemplate = getShapeTemplate(canvasObj);
    let importedData = JSON.parse(canvasObj.canvasData);
    let numShapes = importedData.length;
    
    for (let i = 0; i < numShapes; i++) {
      let shape = {
        id: i,
        x: importedData[i].x,
        y: importedData[i].y,
        h: importedData[i].h,
        w: importedData[i].w
      }
      // canvasData.push(shape);
      let domShape = document.createElement('div');
      domShape.setAttribute('class', 'rect');
      domShape.setAttribute('style', `width:${shape.w}px; height:${shape.h}px; transform: translate(${shape.x}px,${shape.y}px`);
      canvas.appendChild(domShape);
    }
  };

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