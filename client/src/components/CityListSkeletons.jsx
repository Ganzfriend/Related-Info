/* eslint-disable import/extensions */
import React from 'react';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../styles.js';

const useStyles = makeStyles(styles);

const CityListSkeletons = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box>
        <Skeleton variant="text" height={50} width={500} />
      </Box>
      <Box className={classes.cityList}>
        {
          [...Array(4)].map((e, i) => (
            <Skeleton
              key={i}
              variant="text"
              width={100}
              height={50}
            />
          ))
        }
      </Box>
    </Box>
  );
};

export default CityListSkeletons;
