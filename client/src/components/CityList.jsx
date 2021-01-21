/* eslint-disable arrow-parens */
/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../styles.js';

const useStyles = makeStyles(styles);

const CityList = ({ cities, setCity }) => {
  const classes = useStyles();
  return (
    <Box className={classes.cityList}>
      { cities.map(city => (
        <Typography key={city._id} className={classes.cities}>
          <Button href="#" onClick={() => { setCity(city.name); }}>
            {city.name}
          </Button>
        </Typography>

      ))}
    </Box>
  );
};

export default CityList;
