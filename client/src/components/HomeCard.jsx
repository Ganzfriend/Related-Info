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

const HomeCard = ({ home }) => {
  const placeholderImageURL = generatePhotoPlaceholderURL(200, 200);
  const [liked, setLiked] = useState(false);
  const classes = useStyles();

  useEffect(() => setLiked(home.liked), [home.liked]);

  const handleHeartClick = (clickedHomeId) => {
    const newLiked = !liked;
    axios.patch(`http://localhost:3000/homes/${clickedHomeId}`, { liked: newLiked })
      .then(data => console.log('the data is', data))
      .then(() => setLiked(!liked))
      .catch((err) => console.log(err));
  };

  return (
    <Card key={home._id} className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={placeholderImageURL}
          title="Click to check out your new home!"
        >
          {home.superhost ? <Box className={classes.superhost}> SUPERHOST </Box> : '' }
          <Box className={liked ? `${classes.heart} ${classes.liked}` : classes.heart}>
            <FavoriteTwoToneIcon
              onClick={() => { handleHeartClick(home._id); }}
            />
          </Box>
        </CardMedia>
        <Box className={classes.content}>
          <Box className={classes.reviewsBox}>
            <StarRateIcon style={{ color: 'red' }} />
            <Typography style={{ color: 'gray' }}>
              {home.reviews > 0 ? `${home.reviews} reviews` : 'New'}
            </Typography>
          </Box>
          <Box className={classes.typeNumBedsBox}>
            <Typography>{home.type}</Typography>
            <Typography className={classes.bullet}> • </Typography>
            <Typography>
              {`${home.beds} beds`}
            </Typography>
          </Box>
          <MouseOverPopover
            className={classes.description}
            description={home.description}
          />
          <Box className={classes.priceBox}>
            <Typography className={classes.price}>{`$${home.price}`}</Typography>
            <Typography> / night </Typography>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default HomeCard;
