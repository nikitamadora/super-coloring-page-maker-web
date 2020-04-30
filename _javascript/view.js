document.addEventListener('DOMContentLoaded', () => {
  const API_BASE = '/api/v1';
  const artboardId = window.location.pathname.split('/')[2];
  const canvas = document.querySelector('.canvas');

  const fetchData = () => {
    fetch(`${API_BASE}/artboard/${artboardId}`)
      .then((stream) => stream.json())
      .then(res => recreateCanvas(res))
      .catch(error => console.log('error', error));
  };

  fetchData();

  const recreateCanvas = (canvasObj) => {
    let importedData = JSON.parse(canvasObj.canvasData);
    let numShapes = importedData.length;
    
    for (let i = 0; i < numShapes; i++) {
      let shape = {
        id: i,
        type: importedData[i].type,
        x: importedData[i].x,
        y: importedData[i].y,
        h: importedData[i].h,
        w: importedData[i].w
      }
    
      let domShape = document.createElement('div');
      domShape.classList.add('shape', `${shape.type}`);
      if (shape.type === 'rectangle' || shape.type === 'oval') {
        domShape.setAttribute('style', `width:${shape.w}px; height:${shape.h}px; transform: translate(${shape.x}px,${shape.y}px)`);
      } else if (shape.type === 'circle' || shape.type === 'square') {
        domShape.setAttribute('style', `width:${shape.w}px; height:${shape.w}px; transform: translate(${shape.x}px, ${shape.y}px`);
      }
      canvas.appendChild(domShape);
    }
  };
});