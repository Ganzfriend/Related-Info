/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable-next-line import/extensions */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Carousel from 'react-multi-carousel';
// import Carousel from 'react-material-ui-carousel';
// import Box from '@material-ui/core/Box';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import HomeCard from './HomeCard';
import styles from '../styles.js';

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider
      className={classes.root}
      {...settings}
    >
      { homeInfo.map((home) => (
        <HomeCard
          home={home}
          handleHeartClick={handleHeartClick}
          classes={classes}
          key={home._id}
        />
      ))}
    </Slider>
    // <Carousel
    //   className={classes.root}
    //   autoPlay={false}
    //   navButtonsAlwaysVisible={true}
    // >
    // { homeInfo.map((home) => (
    //   <HomeCard
    //     home={home}
    //     handleHeartClick={handleHeartClick}
    //     classes={classes}
    //     key={home._id}
    //   />
    // ))}
    // </Carousel>
  );
};

export default Places;
