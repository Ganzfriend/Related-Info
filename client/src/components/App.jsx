import React, {useState, useEffect} from 'react';
import { hot } from 'react-hot-loader/root';
// import Button from '@material-ui/core/Button';
import Places from './Places';

const axios = require('axios');

const App = () => {
// seattle won't be the default once everything is set up, just for now
  const [city, setCity] = useState('seattle');

  const {
    // name,
    data,
  } = city;

  // const {
  //   homes,
  //   activities,
  //   nearbyCities
  // } = data;

  const getCityData = () => {
    axios.get(`http://localhost:3000/${city}`)
      .then((response) => {
        setCity(response.data[0]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => { getCityData(); }, []);

  return (
    <div>
      { data
        ? (
          <div>
            <h1>More places to stay</h1>
            <Places homes={data.homes} />
          </div>
        )
        : <p>Loading...</p>}
    </div>
  );
};

export default hot(App);
