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
  const { name, liked, dataId } = req.body;
  const _id = req.params.id;
  console.log('_id is ', _id);
  console.log('req.body is ', req.body);

  City.findOneAndUpdate({ name, _id: dataId }, { $set: { homes: _id } }, { liked })
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
});
// {_id:req.body._id}, {$push: {"sensors" :
// {"sensor_name" : req.body.sensor_name , "measurements.0.time": req.body.time } } },
// {new:true}
// make sure the id being passed in is the one you want! either from data or the home itself
// make it match up with what's in Places.jsx

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