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
import ActivityCard from './ActivityCard';
import styles from '../styles.js';

const axios = require('axios');

const useStyles = makeStyles(styles);

const Activities = ({ activityInfo, getActivityData }) => {
  const classes = useStyles();

  const handleHeartClick = (activity) => {
    const liked = !activity.liked;
    /* could be improved to re-render only the specific card rather than the whole component */
    axios.patch(`http://localhost:3000/activities/${activity._id}`, { liked })
      .then(() => getActivityData())
      .catch((err) => console.log(err));
  };

  const responsive = {
    large: {
      breakpoint: { max: 3000, min: 1500 },
      items: 5,
      slidesToSlide: 5,
    },
    medium: {
      breakpoint: { max: 1500, min: 1200 },
      items: 4,
      slidesToSlide: 4,
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
    <Carousel
      className={classes.activitySlider}
      responsive={responsive}
      infinite
    >
      { activityInfo.map((activity) => (
        <ActivityCard
          activity={activity}
          handleHeartClick={handleHeartClick}
          classes={classes}
          key={activity._id}
        />
      ))}
    </Carousel>
  );
};

export default Activities;
