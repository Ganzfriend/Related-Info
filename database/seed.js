// this will be where the dummy data goes, to seed db
// "npm run seed" to make it happen

const City = require('./index.js');

const sampleCities = [
{ name: "Seattle",
  data: {
    homes:
    [ {
      image: "https://unsplash.com/photos/skUTVJi8-jc",
      reviews: 8,
      type: "Private room",
      beds: 2,
      description: "Cozy and quaint, but also haunted",
      price: 65,
      superhost: true,
      liked: true,
      location: "Auburn, WA"
    } ] ,

    activities:
    [ {
      image: "https://unsplash.com/photos/16ziVZtz8vA",
      reviews: 12,
      description: "An afternoon at the market: Come experience Pike's Place!",
      price: 45,
      liked: false,
      location: "Pike Place Market, Seattle, WA"
    } ] ,

    nearbyCities:
    [ {
        name: "Olympia, WA",
        url: "https://www.google.com"
    } ]
  } }
];

const insertSampleCities = () => {
  City.create(sampleCities)
    .then(() => City.disconnect())
    .catch(err => console.log(err));
};

insertSampleCities();