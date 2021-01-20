/* eslint-disable arrow-parens */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable-next-line import/extensions */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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

  const responsive = {
    large: {
      breakpoint: { max: 3000, min: 1500 },
      items: 4,
      slidesToSlide: 4,
    },
    medium: {
      breakpoint: { max: 1500, min: 1200 },
      items: 3,
      slidesToSlide: 3,
    },
    small: {
      breakpoint: { max: 1200, min: 900 },
      items: 2,
      slidesToSlide: 2,
    },
    xsmall: {
      breakpoint: { max: 900, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <Carousel className={classes.root} responsive={responsive} infinite>
      { homeInfo.map((home) => (
        <HomeCard
          home={home}
          handleHeartClick={handleHeartClick}
          classes={classes}
          key={home._id}
        />
      ))}
    </Carousel>
  );
};

export default Places;
