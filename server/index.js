/* eslint-disable spaced-comment */
/* eslint-disable no-underscore-dangle */
const express = require('express');
const path = require('path');
const cors = require('cors');

const {City, Home} = require('../database/index.js');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '..', 'dist')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

/* clean this file up using express router, or separate out into other files */

app.get('/seattle', (req, res) => {
  Home.find({city: 'Seattle, WA'})
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
});

app.get('/oakland', (req, res) => {
  Home.find({city: 'Oakland, CA'})
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
});

app.get('/hollywood', (req, res) => {
  Home.find({city: 'Hollywood, CA'})
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
});

app.get('/austin', (req, res) => {
  Home.find({city: 'Austin, TX'})
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
});

////////////////////////////////////////

app.patch('/homes/:id', (req, res) => {
  const { liked } = req.body;
  const _id = req.params.id;
  Home.updateOne({ _id }, { liked })
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
});

app.listen(PORT, () => {
  console.log(`server is running and listening on port ${PORT}`);
});