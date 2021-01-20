/* eslint-disable import/extensions */
import React, {useState, useEffect} from 'react';
import { hot } from 'react-hot-loader/root';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Places from './Places';
import Activities from './Activities';
import CardSkeletons from './CardSkeletons';
import styles from '../styles.js';

const axios = require('axios');

const useStyles = makeStyles(styles);

const App = () => {
  /*
  seattle won't be the default once everything is set up, just for now
  maybe instead of nearby cities at the bottom, list out the four city options,
  so user can toggle between
  on click of city, we would call setCity on that value
  */
  const [city, setCity] = useState('Seattle, WA');
  const [homeInfo, setHomeInfo] = useState([]);
  const [activityInfo, setActivityInfo] = useState([]);
  const classes = useStyles();

  const getActivityData = () => {
    axios.get(`http://localhost:3000/activities/${city}`)
      .then((response) => setActivityInfo(response.data))
      .catch((err) => console.log(err));
  };

  const getHomeData = () => {
    axios.get(`http://localhost:3000/homes/${city}`)
      .then((response) => setHomeInfo(response.data))
      .then(() => getActivityData())
      .catch((err) => console.log(err));
  };

  useEffect(() => { getHomeData(); }, []);

  return (
    <Box className={classes.container}>
      { homeInfo.length
        ? (
          <Box>
            <h1>More places to stay</h1>
            <Places city={city} homeInfo={homeInfo} getHomeData={getHomeData} />
          </Box>
        )
        : <CardSkeletons />}
      { activityInfo.length
        ? (
          <Box>
            <h1>Things to do nearby</h1>
            <Activities city={city} activityInfo={activityInfo} getActivityData={getActivityData} />
          </Box>
        )
        : <CardSkeletons />}
    </Box>
  );
};

export default hot(App);
