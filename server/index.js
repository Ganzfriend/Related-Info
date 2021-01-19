/* eslint-disable spaced-comment */
/* eslint-disable no-underscore-dangle */
const express = require('express');
const path = require('path');
const cors = require('cors');

const {City, Home, Activity} = require('../database/index.js');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '..', 'dist')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

/* clean this file up using express router, or separate out into other files */

app.get('/homes/:city', (req, res) => {
  const { city } = req.params;
  Home.find({city})
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
});

////////////////////////////////////////
app.get('/activities/:city', (req, res) => {
  const { city } = req.params;
  Activity.find({ city })
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
});

// app.get('/activities/oakland', (req, res) => {
//   Activity.find({city: 'Oakland, CA'})
//     .then((data) => res.send(data))
//     .catch((err) => res.send(err));
// });

// app.get('/activities/hollywood', (req, res) => {
//   Activity.find({city: 'Hollywood, CA'})
//     .then((data) => res.send(data))
//     .catch((err) => res.send(err));
// });

// app.get('/activities/austin', (req, res) => {
//   Activity.find({city: 'Austin, TX'})
//     .then((data) => res.send(data))
//     .catch((err) => res.send(err));
// });

////////////////////////////////////////

app.patch('/homes/:id', (req, res) => {
  const { liked } = req.body;
  const _id = req.params.id;
  Home.updateOne({ _id }, { liked })
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
});

////////////////////////////////////////

app.patch('/activities/:id', (req, res) => {
  const { liked } = req.body;
  const _id = req.params.id;
  Activity.updateOne({ _id }, { liked })
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
});

////////////////////////////////////////

app.listen(PORT, () => {
  console.log(`server is running and listening on port ${PORT}`);
});