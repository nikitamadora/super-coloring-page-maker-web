import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/views';
import apiRouter from './routes/api.js';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 4001;

// -------------------
//      Mongoose
// -------------------
mongoose.Promise = global.Promise; // We wait for a result when we connect to MongoDB
mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost/super-coloring-page-maker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

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
app.use('/api/v1', apiRouter);

// -------------------
//     Start Server
// -------------------
app.listen(PORT, () => 
  console.log(`Your server is running on port ${PORT}`)
);