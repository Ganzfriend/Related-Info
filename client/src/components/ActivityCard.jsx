/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
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

const ActivityCard = ({ activity, classes, handleHeartClick }) => {
  const placeholderImageURL = generatePhotoPlaceholderURL(200, 200);
  return (
    <Card key={activity._id} className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={placeholderImageURL}
          title="Click to find out more about your next activity!"
        >
          <Box className={activity.liked ? `${classes.heart} ${classes.liked}` : classes.heart}>
            <FavoriteTwoToneIcon
              onClick={() => { handleHeartClick(activity); }}
            />
          </Box>
        </CardMedia>
        <Box className={classes.content}>
          <Box className={classes.reviewsBox}>
            <StarRateIcon style={{ color: 'red' }} />
            <Typography style={{ color: 'gray' }}>
              {activity.reviews > 0 ? `${activity.reviews} reviews` : 'New'}
            </Typography>
          </Box>
          <MouseOverPopover
            className={classes.description}
            description={activity.description}
          />
          <Box className={classes.priceBox}>
            <Typography className={classes.price}>{`From $${activity.price}`}</Typography>
            <Typography> / person </Typography>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default ActivityCard;
