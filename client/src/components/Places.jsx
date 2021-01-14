import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import { generatePhotoPlaceholderURL } from 'react-placeholder-image';
import Box from '@material-ui/core/Box';

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
    // pos: {
    //   marginBottom: 12,
    // },
    card: {
      margin: 10,
      borderRadius: '8px',
      variant: 'rgb(255, 0, 0) dashed',
    },
    media: {
      height: 200,
      width: 300,
    },
  });

  const classes = useStyles();
  const placeholderImageURL = generatePhotoPlaceholderURL(200, 200);

  return (
    <Box className={classes.root}>
      { homes.map((home) => (
        <Card key={home._id} className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              // image={home.image}
              image={placeholderImageURL}
              title="It is a home!"
            />
          </CardActionArea>
          {/* <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions> */}
        </Card>
      ))}
    </Box>
  );
};

export default Places;
