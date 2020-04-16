import express from 'express';
const router = express.Router();

// Homepage & Canvas View
router.get('/', (req, res) => {
  res.sendFile('/views/index.html', {
    root: __dirname + '/../'
  });
});

router.get('/gallery', (req, res) => {
  res.sendFile('/views/gallery.html', {
    root: __dirname + '/../'
  });
});

router.get('/about', (req, res) => {
  res.sendFile('/views/about.html', {
    root: __dirname + '/../'
  });
});

router.get('/view/:id', (req, res) => {
  res.sendFile('/views/view.html', {
    root: __dirname + '/../'
  });
});

export default router;