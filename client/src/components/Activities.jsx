/* eslint-disable arrow-parens */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable-next-line import/extensions */
import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
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

  const SampleNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <Box
        className={className}
        style={{ display: 'block', background: 'lightgray', borderRadius: 10 }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <Box
        className={className}
        content={<ArrowBackIosIcon />}
        style={{ ...style, display: 'block', background: 'gray', borderRadius: 10 }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: false,
    // dotsClass: 'dots',
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    // focusOnSelect: true,
    variableWidth: true,
    adaptiveHeight: true,
    initialSlide: 0,
    nextArrow: <SampleNextArrow className={classes.arrows} onClick={Slider.slickNext} />,
    prevArrow: <SamplePrevArrow className={classes.arrows} onClick={Slider.slickNext} />,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  return (
    <Slider className={classes.activitySlider} {...settings}>
      { activityInfo.map((activity) => (
        <ActivityCard
          activity={activity}
          handleHeartClick={handleHeartClick}
          classes={classes}
          key={activity._id}
        />
      ))}
    </Slider>
  );
};

export default Activities;
