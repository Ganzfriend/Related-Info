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
import getRatings from './getRatings.jsx';

const axios = require('axios');

const useStyles = makeStyles(styles);

const HomeCard = ({ home, handleHomeCardClick }) => {
  const placeholderImageURL = generatePhotoPlaceholderURL(200, 200);
  const [liked, setLiked] = useState(false);
  const [ratings, setRatings] = useState({});
  const classes = useStyles();

  /* once getRatings is fetching the data we need, we'll use these objects to set the
  review count & rating value, rather than what's in my dummy data */
  useEffect(() => {setLiked(home.liked)}, [home.liked]);

  // useEffect(() => {
  //   getRatings()
  //     .then(result => {
  //       setRatings(result);
  //       console.log('result is', result);
  //     });
  // }, []);

  const handleHeartClick = (clickedHomeId) => {
    const newLiked = !liked;
    axios.patch(`http://13.57.15.174:3000/homes/${clickedHomeId}`, { liked: newLiked })
      .then(data => console.log('the data is', data))
      .then(() => setLiked(!liked))
      .catch((err) => console.log(err));
  };

  return (
    <Card key={home._id} className={classes.relatedInfoCard}>
      <CardActionArea
        onClick={() => handleHomeCardClick(home)}
      >
        <CardMedia
          className={classes.relatedInfoMedia}
          image={placeholderImageURL}
          title="Click to check out your new home!"
        >
          {home.superhost ? <Box className={classes.relatedInfoSuperhost}> SUPERHOST </Box> : '' }
          <Box className={liked ? `${classes.relatedInfoHeart} ${classes.relatedInfoliked}` : classes.relatedInfoHeart}>
            <FavoriteTwoToneIcon
              onClick={() => { handleHeartClick(home._id); }}
            />
          </Box>
        </CardMedia>
        <Box className={classes.relatedInfoContent}>
          <Box className={classes.relatedInfoReviewsBox}>
            <StarRateIcon style={{ color: 'red' }} />
            <Typography style={{ color: 'gray' }}>
              {home.reviews > 0 ? `${home.reviews} reviews` : 'New'}
            </Typography>
          </Box>
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
      </CardActionArea>
    </Card>
  );
};

export default HomeCard;
