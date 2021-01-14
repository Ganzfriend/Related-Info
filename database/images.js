const TOKEN = require('../config.js');
const axios = require('axios');

var getImagesFromCloud = () => {
  let options = {
    url: ,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${TOKEN.key}`
    }
  };
  return axios.get(options.url, options.headers)
  .then(result => result)
  .catch(err => {
    console.log(err);
  });
};

export default getImagesFromCloud;
