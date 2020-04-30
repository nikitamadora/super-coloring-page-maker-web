import mongoose from 'mongoose';
import { ArtboardSchema } from '../models/Artboard';

const Artboard = mongoose.model('Artboard', ArtboardSchema);

export const addNewArtboard = (req, res) => {
  let newArtboard = new Artboard(req.body);

  newArtboard.save((err, artboard) => {
    if (err) {
      res.send(err);
    }
    res.json(artboard);
  });
}

export const getArtboards = (req, res) => {
  Artboard.find({}, (err, artboard) => {
    if (err) {
      res.send(err);
    }
    res.json(artboard);
  });
}

export const getArtboardWithId = (req, res) => {
  Artboard.findById(req.params.artboardID, (err, artboard) => {
    if (err) {
      res.send(err);
    }
    res.json(artboard);
  });
}