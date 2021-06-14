const mongoose = require('mongoose');

// const uri = process.env.MONGODB_URI;
const uri = 'mongodb+srv://mongo:mongo@destination-capstone.8oji2.mongodb.net/destination-capstone?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB is all connected, folks!');
});

const homeSchema = new mongoose.Schema({
  image: String,
  reviews: { type: Number, default: 0 },
  type: String,
  beds: Number,
  description: String,
  price: Number,
  superhost: Boolean,
  liked: Boolean,
  location: String,
  city: String,
});

const Home = mongoose.model('Home', homeSchema);

const activitySchema = new mongoose.Schema({
  image: String,
  reviews: { type: Number, default: 0 },
  description: String,
  price: Number,
  liked: Boolean,
  location: String,
  city: String,
});

const Activity = mongoose.model('Activity', activitySchema);

const citySchema = new mongoose.Schema({
  name: String,
  url: String,
});

const City = mongoose.model('City', citySchema);

module.exports = { City, Home, Activity };
