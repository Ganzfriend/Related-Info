/* eslint-disable import/extensions */
import React, {useState, useEffect} from 'react';
import { hot } from 'react-hot-loader/root';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Places from './Places';
import Activities from './Activities';
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
  const [city, setCity] = useState('seattle');
  const [homeInfo, setHomeInfo] = useState([]);
  const classes = useStyles();

  const getHomeData = () => {
    axios.get(`http://localhost:3000/${city}`)
      .then((response) => setHomeInfo(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => { getHomeData(); }, []);

  return (
    <Box className={classes.container}>
      { homeInfo.length
        ? (
          <div>
            <h1>More places to stay</h1>
            <Places city={city} homeInfo={homeInfo} getHomeData={getHomeData} />
            <h1>Things to do nearby</h1>
            <Activities city={city} homeInfo={homeInfo} />
          </div>
        )
        : <p>Loading...</p>}
    </Box>
  );
};

export default hot(App);
