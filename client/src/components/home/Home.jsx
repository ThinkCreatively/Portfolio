import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import useStyles from './HomeStyles.jsx';
import Header from '../Header.jsx';

const Home = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.homeContainer}>
      <Grid item xs={12} md={1} className={classes.scroll}>
        Left Scroll
      </Grid>
      <Grid item xs={12} md={10} className={classes.homeContainer}>
        Body
      </Grid>
      <Grid item xs={12} md={1} className={classes.scroll}>
        Right Scroll
      </Grid>
    </Grid>
  );
};

export default Home;
