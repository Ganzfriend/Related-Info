import React, {useState, useEffect} from 'react';
import { hot } from 'react-hot-loader/root';
// import Button from '@material-ui/core/Button';
import Places from './Places';

const axios = require('axios');

const App = () => {
// seattle won't be the default once everything is set up, just for now
  const [city, setCity] = useState('seattle');
  const [cityInfo, setCityInfo] = useState({});

  const {
    // name,
    data,
  } = cityInfo;

  // const {
  //   homes,
  //   activities,
  //   nearbyCities
  // } = data;

  const getCityData = () => {
    axios.get(`http://localhost:3000/${city}`)
      .then((response) => {
        setCityInfo(response.data[0]);
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
            <Places city={city} cityInfo={cityInfo} />
          </div>
        )
        : <p>Loading...</p>}
    </div>
  );
};

export default hot(App);
