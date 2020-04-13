import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/views';

const app = express();
const PORT = 4001;

// -------------------
//    Public Files
// -------------------
app.use(express.static('dist'));

// -------------------
//     bodyParser
// -------------------
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// -------------------
//       Routers
// -------------------
app.use('/', router);

// -------------------
//     Start Server
// -------------------
app.listen(PORT, () => 
  console.log(`Your server is running on port ${PORT}`)
);