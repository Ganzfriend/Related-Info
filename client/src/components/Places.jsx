/* eslint-disable no-console */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { generatePhotoPlaceholderURL } from 'react-placeholder-image';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
// import Carousel from 'react-material-ui-carousel';
// eslint-disable-next-line import/extensions
import styles from '../styles.js';
import MouseOverPopover from './MouseOverPopover';

const axios = require('axios');

const useStyles = makeStyles(styles);

const Places = ({ homeInfo, getHomeData }) => {
  const classes = useStyles();

  const handleHeartClick = (home) => {
    const liked = !home.liked;
    /* could be improved to re-render only the specific card rather than the whole component */
    axios.patch(`http://localhost:3000/homes/${home._id}`, { liked })
      .then(() => getHomeData())
      .catch((err) => console.log(err));
  };

  return (
    <Box className={classes.root}>
      { homeInfo.map((home) => {
        const placeholderImageURL = generatePhotoPlaceholderURL(200, 200);
        return (
          <Card key={home._id} className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={placeholderImageURL}
                title={home.description}
              >
                {home.superhost ? <div className={classes.superhost}> SUPERHOST </div> : '' }
                <div className={home.liked ? `${classes.heart} ${classes.liked}` : classes.heart}>
                  <FavoriteTwoToneIcon
                    onClick={() => { handleHeartClick(home); }}
                  />
                </div>
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
                  <Typography> {`${home.beds} beds`} </Typography>
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
      })}
    </Box>
  );
};

export default Places;
