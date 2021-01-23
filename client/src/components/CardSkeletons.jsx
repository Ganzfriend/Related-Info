/* eslint-disable import/extensions */
import React from 'react';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../styles.js';

const useStyles = makeStyles(styles);

const CardSkeletons = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box>
        <Skeleton variant="text" height={50} width={300} />
      </Box>
      <Box className={classes.cardSkeletons}>
        {
          [...Array(4)].map((e, i) => (
            <Skeleton
              key={i}
              variant="rect"
              width="25%"
              height={250}
              className={classes.relatedInfoSkeleton}
            />
          ))
        }
      </Box>
    </Box>
  );
};

export default CardSkeletons;
