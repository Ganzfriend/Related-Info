const express = require('express');
const path = require('path');
const cors = require('cors');

const City = require('../database/index.js');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '..', 'dist')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get('/seattle', (req, res) => {
  City.find({name: 'Seattle, WA'})
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
});

app.patch('/seattle/:id', (req, res) => {
  const liked = req.body.liked;
  const _id = req.params.id;
  City.findOneAndUpdate({name: 'Seattle, WA'}, { _id }, { $set: { liked } })
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
});

/*
findOneAndUpdate(
    { "_id": folderId, "permissions._id": permission._id },
    {
        "$set": {
            "permissions.$": permission
        }
    }

*/

app.get('/oakland', (req, res) => {
  City.find({name: 'Oakland, CA'})
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
});

app.get('/hollywood', (req, res) => {
  City.find({name: 'Hollywood, CA'})
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
});

app.get('/austin', (req, res) => {
  City.find({name: 'Austin, TX'})
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
});

app.listen(PORT, () => {
  console.log(`server is running and listening on port ${PORT}`);
});