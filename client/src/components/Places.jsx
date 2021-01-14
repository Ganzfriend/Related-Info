import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const Places = ({homes}) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
  }));

  const classes = useStyles();

  const addImage = (url) => (
    {
      paperContainer: {
        backgroundImage: url,
      },
    }
  );

  return (
    <div className={classes.root}>
      {homes.map((home) => (
        <div key={home._id}>
          <Paper elevation={3} style={addImage(home.image)} />
        </div>
      ))}
      {/* <Paper elevation={3} style={addImage(homes[0].image)} /> */}
    </div>
  );
};

export default Places;
