// this will be where the dummy data goes, to seed db
// "npm run seed" to make it happen

// stretch goal => add url prop to all homes, sending to that home's endpoint & rendering in main component

const City = require('./index.js');

const sampleCities = [
{ name: "Seattle, WA",
  data: {
    homes:
    [ {
      id: 1,
      image: "https://unsplash.com/photos/skUTVJi8-jc",
      reviews: 8,
      type: "Private room",
      beds: 2,
      description: "Cozy and quaint, but also haunted (by Elon Musk's time-travelling ghost)",
      price: 65,
      superhost: true,
      liked: true,
      location: "Auburn, WA",
      url: "https://www.google.com"
    } ] ,

    activities:
    [ {
      id: 1,
      image: "https://unsplash.com/photos/16ziVZtz8vA",
      reviews: 12,
      description: "An afternoon at the market: Come experience Pike's Place!",
      price: 45,
      liked: false,
      location: "Pike Place Market, Seattle, WA"
    } ] ,

    nearbyCities:
    [ {
      id: 1,
      name: "Olympia, WA",
      url: "https://www.google.com"
    } ]
  } },

  { name: "Oakland, CA",
  data: {
    homes:
    [ {
      id: 1,
      image: "https://unsplash.com/photos/ezRKQQPWJOw",
      reviews: 8,
      type: "Entire house",
      beds: 4,
      description: "It's definitely a house. Come check it out!",
      price: 235,
      superhost: false,
      liked: false,
      location: "Oakland, CA",
      url: "https://www.google.com"
    } ] ,

    activities:
    [ {
      id: 1,
      image: "https://unsplash.com/photos/JDSjHhdgpZY",
      reviews: 1,
      description: "Come check out this brown wooden dock. A favorite of Oakland locals!",
      price: 765,
      liked: false,
      location: "Deep in the woods, by the water."
    } ] ,

    nearbyCities:
    [ {
      id: 1,
      name: "San Jose, CA",
      url: "https://www.google.com"
      },
      {
        name: "San Francisco, CA",
        url: "https://www.google.com"
      }
   ]
  } },

  { name: "Hollywood, CA",
  data: {
    homes:
    [ {
      id: 1,
      image: "https://unsplash.com/photos/To7GxHUMq6g",
      reviews: 8,
      type: "Shared room",
      beds: 1,
      description: "The rats don't bite, as long as you're awake.",
      price: 115,
      superhost: false,
      liked: true,
      location: "Studio City, CA",
      url: "https://www.google.com"
    } ] ,

    activities:
    [ {
      id: 1,
      image: "https://unsplash.com/photos/8LlJNFLTEm0",
      reviews: 25,
      description: "Celebrities nowhere. Tourists everywhere. You're gonna love this tour!",
      price: 125,
      liked: true,
      location: "West Hollywood, CA"
    } ] ,

    nearbyCities:
    [ {
      id: 1,
      name: "Santa Monica, CA",
      url: "https://www.google.com"
      },
      {
      id: 2,
      name: "Los Angeles, CA",
      url: "https://www.google.com"
      },
      {
      id: 3,
      name: "Pasadena, CA",
      url: "https://www.google.com"
      },
      {
      id: 4,
      name: "El Segundo, CA",
      url: "https://www.google.com"
      }
    ]
  } },

  { name: "Austin, TX",
  data: {
    homes:
    [ {
      id: 1,
      image: "https://unsplash.com/photos/E9Udq-cPVXs",
      reviews: 0,
      type: "Living room only",
      beds: 0,
      description: "The best Des. Cap. experience you'll ever have",
      price: 18,
      superhost: false,
      liked: false,
      location: "Taylor, TX",
      url: "https://www.google.com"
    } ] ,

    activities:
    [ {
      id: 1,
      image: "https://unsplash.com/photos/HFbzqwfnrsE",
      reviews: 68,
      description: "Paddleboarding lessons! Just don't fall in!",
      price: 70,
      liked: true,
      location: "Butler Shores at Town Lake Metro Park Trail, Austin, TX"
    } ] ,

    nearbyCities:
    [ {
      id: 1,
      name: "Jollyville, TX",
      url: "https://www.google.com"
      },
      {
      id: 2,
      name: "Round Rock, TX",
      url: "https://www.google.com"
      }
    ]
  } }
];

const insertSampleCities = () => {
  City.create(sampleCities)
    .then(() => City.disconnect())
    .catch(err => console.log(err));
};

insertSampleCities();