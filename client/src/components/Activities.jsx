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

const useStyles = makeStyles(styles);

const Activities = ({ activityInfo }) => {
  const classes = useStyles();

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
          key={activity._id}
        />
      ))}
    </Carousel>
  );
};

export default Activities;
