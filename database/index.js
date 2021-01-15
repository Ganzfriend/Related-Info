const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/relatedInfo', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB is all connected, folks!');
});

const homeSchema = new mongoose.Schema({
  // homeId: Number,
  image: String,
  reviews: {type: Number, default: 0 },
  type: String,
  beds: Number,
  description: String,
  price: Number,
  superhost: Boolean,
  liked: Boolean,
  location: String,
});

const Home = mongoose.model('Home', homeSchema);

const activitySchema = new mongoose.Schema({
  // activityId: Number,
  image: String,
  reviews: {type: Number, default: 0 },
  description: String,
  price: Number,
  liked: Boolean,
  location: String,
});

const nearbyCitySchema = new mongoose.Schema({
  // nearbyCityId: Number,
  name: String,
  url: String,
});

const dataSchema = new mongoose.Schema({
  // dataId: Number,
  homes: [homeSchema],
  activities: [activitySchema],
  nearbyCities: [nearbyCitySchema],
});

const citySchema = new mongoose.Schema({
  // cityId: Number,
  name: String,
  data: dataSchema,
});

const City = mongoose.model('City', citySchema);

module.exports = {City, Home};
