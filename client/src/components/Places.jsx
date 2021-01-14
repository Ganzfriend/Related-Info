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

const Places = ({homes}) => {
  const useStyles = makeStyles({
    root: {
      marginBottom: 12,
      display: 'flex',
      flexWrap: 'wrap',
      // height: 275,
      // width: 267,
    },
    // title: {
    //   fontSize: 14,
    // },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    card: {
      margin: 10,
      borderRadius: '8px',
      variant: 'rgb(255, 0, 0) dashed',
    },
    description: {
      marginLeft: 5,
    },
    media: {
      height: 200,
      width: 300,
      marginBottom: 10,
      borderRadius: '8px',
    },
  });

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
                title={home.description}
              />
            </CardActionArea>
            <Typography style={{ color: 'gray' }}>
              <StarRateIcon style={{ color: 'red' }} />
              {home.reviews > 0 ? `${home.reviews} reviews` : 'New'}
            </Typography>
            <Typography>
              <span className={classes.description}>
                {home.type}
                {bull}
                {`${home.beds} beds`}
              </span>
            </Typography>
          </Card>
        );
      })}
    </Box>
  );
};

export default Places;
