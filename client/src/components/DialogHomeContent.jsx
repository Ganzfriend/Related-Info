import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { generatePhotoPlaceholderURL } from 'react-placeholder-image';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import StarRateIcon from '@material-ui/icons/StarRate';
import MouseOverPopover from './MouseOverPopover';
import styles from '../styles.js';

const useStyles = makeStyles(styles);

const DialogHomeContent = ({ home }) => {
  const placeholderImageURL = generatePhotoPlaceholderURL(200, 200);
  const classes = useStyles();

  return (
    <Box key={home._id} className={classes.relatedInfoDialog}>
      <Typography className={classes.relatedInfoDialogTitle}>{home.description}</Typography>
      <Box className={classes.relatedInfoDialogContent}>
        <StarRateIcon style={{ color: 'red' }} />
        <Typography style={{ color: 'gray' }}>
          {home.reviews > 0 ? `${home.reviews} reviews` : 'New'}
        </Typography>
        <Typography className={classes.relatedInfoBullet}> • </Typography>
        <Typography> {home.city} </Typography>
      </Box>
      <Box className={classes.relatedInfoDialogMediaBox}>
        <img
          className={classes.relatedInfoDialogMedia}
          src={placeholderImageURL}
          alt="Here's an upclose look"
          height="420px"
          width="600px"
        />
      </Box>
    </Box>
  );
};

export default DialogHomeContent;
