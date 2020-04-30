import express from 'express';
const apiRouter = express.Router();

apiRouter.get('/', (req, res) => {
  res.sendFile('/views/index.html', {
    root: __dirname + '/../'
  });
});

apiRouter.get('/gallery', (req, res) => {
  res.sendFile('/views/gallery.html', {
    root: __dirname + '/../'
  });
});

apiRouter.get('/about', (req, res) => {
  res.sendFile('/views/about.html', {
    root: __dirname + '/../'
  });
});

apiRouter.get('/view/:id', (req, res) => {
  res.sendFile('/views/printView.html', {
    root: __dirname + '/../'
  });
});

export default apiRouter;