// this will be where the dummy data goes, to seed db
// "npm run seed" to make it happen

// stretch goal => add url prop to all homes,
// sending to that home's endpoint & rendering in main component
const db = require('mongoose');
const sampleCities = require('./sampleData/sampleCities');
const sampleHomes = require('./sampleData/sampleHomes');
const sampleActivities = require('./sampleData/sampleActivities');
const { City, Home, Activity } = require('./index');

const insertSampleCities = () => {
  City.create(sampleCities)
    .then(() => Home.create(sampleHomes))
    .then(() => Activity.create(sampleActivities))
    .then(() => db.disconnect())
    .catch((err) => console.log(err));
};

insertSampleCities();
