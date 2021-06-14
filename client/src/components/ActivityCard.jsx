/* eslint-disable no-console */
/* eslint-disable arrow-parens */
/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable-next-line import/extensions */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { generatePhotoPlaceholderURL } from 'react-placeholder-image';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import MouseOverPopover from './MouseOverPopover';
import styles from '../styles.js';

const axios = require('axios');

const useStyles = makeStyles(styles);

const ActivityCard = ({ activity }) => {
  const placeholderImageURL = generatePhotoPlaceholderURL(200, 200);
  const [liked, setLiked] = useState(false);
  const classes = useStyles();

  useEffect(() => setLiked(activity.liked), [activity.liked]);

  const handleHeartClick = (clickedActivityId) => {
    const newLiked = !liked;
    axios.patch(`/activities/${clickedActivityId}`, { liked: newLiked })
      .then(() => setLiked(!liked))
      .catch((err) => console.log(err));
  };

  return (
    <Card key={activity._id} className={classes.activityCard}>
      <CardActionArea>
        <CardMedia
          className={classes.activityMedia}
          image={placeholderImageURL}
          title="Click to find out more about your next adventure!"
        >
          <Box className={liked ? `${classes.relatedInfoHeart} ${classes.relatedInfoLiked}` : classes.relatedInfoHeart}>
            <FavoriteTwoToneIcon
              onClick={() => { handleHeartClick(activity._id); }}
            />
          </Box>
        </CardMedia>
        <Box className={classes.relatedInfoContent}>
          <Box className={classes.relatedInfoReviewsBox}>
            <StarRateIcon style={{ color: 'red' }} />
            <Typography style={{ color: 'gray' }}>
              {activity.reviews > 0 ? `${activity.reviews} reviews` : 'New'}
            </Typography>
          </Box>
          <MouseOverPopover
            className={classes.relatedInfoCardDescription}
            description={activity.description}
          />
          <Box className={classes.relatedInfoPriceBox}>
            <Typography className={classes.relatedInfoPrice}>{`From $${activity.price}`}</Typography>
            <Typography> / person </Typography>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default ActivityCard;
