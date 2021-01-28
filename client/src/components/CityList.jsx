/* eslint-disable arrow-parens */
/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../styles.js';

const useStyles = makeStyles(styles);

const CityList = ({ cities, setCity }) => {
  const classes = useStyles();
  return (
    <Box className={classes.cityList}>
      { cities.map(city => (
        <a href="#scrollTarget" className={classes.cityListAnchor} key={city._id} onClick={() => setCity(city.name)}>
          <Button className={classes.cities}>
            {city.name}
          </Button>
        </a>
      ))}
    </Box>
  );
};

export default CityList;
