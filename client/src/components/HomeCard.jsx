/* eslint-disable-next-line import/extensions */
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { generatePhotoPlaceholderURL } from 'react-placeholder-image';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import MouseOverPopover from './MouseOverPopover';

const HomeCard = ({home, classes, handleHeartClick}) => {
  const placeholderImageURL = generatePhotoPlaceholderURL(200, 200);
  return (
    <Card key={home._id} className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={placeholderImageURL}
          title="Click to check out your new home!"
        >
          {home.superhost ? <div className={classes.superhost}> SUPERHOST </div> : '' }
          <Box className={home.liked ? `${classes.heart} ${classes.liked}` : classes.heart}>
            <FavoriteTwoToneIcon
              onClick={() => { handleHeartClick(home); }}
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
};

export default HomeCard;
