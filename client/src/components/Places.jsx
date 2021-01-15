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
import IconButton from '@material-ui/core/IconButton';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import styles from '../styles.js';

const axios = require('axios');

const useStyles = makeStyles(styles);

const Places = ({city, homeInfo}) => {
  // const homes = homeInfo.data.homes;
  // const name = homeInfo[0].location;
  // const dataId = homeInfo.data._id;
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const handleHeartClick = (home) => {
    let liked = !home.liked;
    axios.patch(`http://localhost:3000/${home._id}`, { liked })
      .then((result) => console.log(result))
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
                // image={home.image}
                image={placeholderImageURL}
                title={home.description}
              >
                {home.superhost ? <div className={classes.superhost}> SUPERHOST </div> : '' }
                <div className={home.liked ? classes.liked : classes.notLiked}>
                  <FavoriteTwoToneIcon
                    onClick={() => { handleHeartClick(home); }}
                  />
                </div>

                {/* <IconButton
                  onClick={() => { handleHeartClick(home); }}
                >
                </IconButton> */}
              </CardMedia>
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
              <Typography className={`${classes.content} ${classes.description}`}>
                {home.description}
              </Typography>
              <Typography className={classes.content}>
                <strong> {`$${home.price}`} </strong>
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
