/* eslint-disable arrow-parens */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable-next-line import/extensions */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
// import Draggable from 'react-draggable';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import HomeCard from './HomeCard';
import DialogHomeContent from './DialogHomeContent';
import styles from '../styles.js';

const useStyles = makeStyles(styles);

// const PaperComponent = (props) => (
//   <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
//     <Paper {...props} />
//   </Draggable>
// );

const Places = ({ homeInfo }) => {
  const classes = useStyles();
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  const ButtonGroup = ({
    next, previous, goToSlide, ...rest
  }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <Box className={classes.carouselButtonGroup}>
        <IconButton className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()}>
          <NavigateBeforeIcon className={classes.relatedInfoArrow} />
        </IconButton>
        <IconButton onClick={() => next()}>
          <NavigateNextIcon className={classes.relatedInfoArrow} />
        </IconButton>
      </Box>
    );
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

  const handleHomeCardClick = (clickedHome) => {
    setSelected(clickedHome);
    setOpen(true);
  };

  const handleCardClose = () => {
    setOpen(false);
    setSelected(null);
  };

  return (
    <Box>
      <Carousel
        containerClass={classes.homeSlider}
        responsive={responsive}
        infinite
        renderButtonGroupOutside
        arrows={false}
        customButtonGroup={<ButtonGroup />}
      >
        { homeInfo.map((home) => (
          <HomeCard
            home={home}
            key={home._id}
            handleHomeCardClick={handleHomeCardClick}
          />
        ))}
      </Carousel>
      {
        !!selected && (
          <Dialog
            open={open}
            onClose={handleCardClose}
            className={classes.dialogCard}
            aria-labelledby="draggable-dialog-title"
          >
            <DialogHomeContent
              home={selected}
            />
          </Dialog>
        )
      }
    </Box>
  );
};

export default Places;
