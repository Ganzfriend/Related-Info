const axios = require('axios');
/* right now, this GET request will return all of Chris' dummy data. we'll need to
sort by city and create objects consisting only of rating total and review count */
const getRatings = () => axios.get('http://3.101.149.145:3004/listing/all')
  .then((result) => result.data)
  .catch((err) => console.log(err));

export default getRatings;
