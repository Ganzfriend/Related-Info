/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Places from './Places';
import Activities from './Activities';
import CityList from './CityList';
import CardSkeletons from './CardSkeletons';
import CityListSkeletons from './CityListSkeletons';
import styles from '../styles.js';

const axios = require('axios');

const useStyles = makeStyles(styles);

const App = () => {
  /*
  seattle won't be the default once everything is set up, just for now.
  maybe instead of nearby cities at the bottom, list out the four city options,
  so user can toggle between
  on click of city, we would call setCity on that value
  */
  const [city, setCity] = useState('Seattle, WA');
  const [homeInfo, setHomeInfo] = useState([]);
  const [activityInfo, setActivityInfo] = useState([]);
  const [cities, setCities] = useState([]);
  const classes = useStyles();

  const getActivityData = () => {
    axios.get(`http://localhost:3000/activities/${city}`)
      .then((response) => setActivityInfo(response.data))
      .catch((err) => console.log(err));
  };

  const getCities = () => {
    axios.get(`http://localhost:3000/cities`)
      .then((response) => setCities(response.data))
      .catch((err) => console.log(err));
  };

  const getHomeData = () => {
    axios.get(`http://localhost:3000/homes/${city}`)
      .then((response) => setHomeInfo(response.data))
      .then(() => getActivityData())
      .then(() => getCities())
      .catch((err) => console.log(err));
  };

  useEffect(() => { getHomeData(); }, []);

  return (
    <Box className={classes.container}>
      { homeInfo.length
        ? (
          <Box>
            <h1>More places to stay</h1>
            <Places homeInfo={homeInfo} />
          </Box>
        )
        : <CardSkeletons />}
      { activityInfo.length
        ? (
          <Box>
            <h1>Things to do nearby</h1>
            <Activities activityInfo={activityInfo} />
          </Box>
        )
        : <CardSkeletons />}
      { cities.length
        ? (
          <Box>
            <h1>Explore other options in another city</h1>
            <CityList cities={cities} setCity={setCity} />
          </Box>
        )
        : <CityListSkeletons />}
    </Box>
  );
};

export default App;
