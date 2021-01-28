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
      <Box className={classes.relatedInfoContent}>
        <Box className={classes.relatedInfoReviewsBox}>
          <StarRateIcon style={{ color: 'red' }} />
          <Typography style={{ color: 'gray' }}>
            {home.reviews > 0 ? `${home.reviews} reviews` : 'New'}
          </Typography>
          <Typography className={classes.relatedInfoBullet}> • </Typography>
          <Typography> {home.city} </Typography>
        </Box>
        <img
          // className={classes.relatedInfoMedia}
          src={placeholderImageURL}
          alt="Here's an upclose look"
        />
        <Box className={classes.typeNumBedsBox}>
          <Typography>{home.type}</Typography>
          <Typography className={classes.relatedInfoBullet}> • </Typography>
          <Typography>
            {`${home.beds} beds`}
          </Typography>
        </Box>
        <MouseOverPopover
          className={classes.relatedInfoCardDescription}
          description={home.description}
        />
        <Box className={classes.relatedInfoPriceBox}>
          <Typography className={classes.relatedInfoPrice}>{`$${home.price}`}</Typography>
          <Typography> / night </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DialogHomeContent;
