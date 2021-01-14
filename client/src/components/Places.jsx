import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import { generatePhotoPlaceholderURL } from 'react-placeholder-image';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import styles from '../styles.js';

const useStyles = makeStyles(styles);

const Places = ({homes}) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Box className={classes.root}>
      { homes.map((home) => {
        const placeholderImageURL = generatePhotoPlaceholderURL(200, 200);
        return (
          <Card key={home._id} className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                // image={home.image}
                image={placeholderImageURL}
                title="Click for more!"
              />
              <FavoriteTwoToneIcon />
              <Typography style={{ color: 'gray' }}>
                <StarRateIcon style={{ color: 'red' }} />
                {home.reviews > 0 ? `${home.reviews} reviews` : 'New'}
              </Typography>
              <Typography>
                <span className={classes.content}>
                  {home.type}
                  {bull}
                  {`${home.beds} beds`}
                </span>
              </Typography>
              <Typography className={classes.content}>
                {home.description}
              </Typography>
              <Typography className={classes.content}>
                <span className={classes.price}> ${home.price} </span>
                / night
              </Typography>
            </CardActionArea>
          </Card>
        );
      })}
    </Box>
  );
};

export default Places;
