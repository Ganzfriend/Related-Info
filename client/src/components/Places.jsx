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

  return (
    <div className={classes.root}>
      {homes.map((home) => {
        const styles = {
          backgroundImage: `url(${home.image})`,
        };

        return (
          <div key={home._id}>
            <Paper elevation={3} style={styles} />
          </div>
        );
      })}
    </div>
  );
};

export default Places;
