import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import useStyles from './HomeStyles.jsx';

const Home = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.homeContainer}>
      <Grid item xs={12} md={6} className={classes.homeContainer}>
        <Typography variant="h1">
          James Moore
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} className={classes.tabs}>
        <Typography variant="h1">
          Area For Tabs
        </Typography>
      </Grid>
      <Grid container className={classes.aboutMe}>
        <Grid item xs={12} md={8} className={classes.aboutMeParagraph}>
          <Typography variant="h1" align="left">
            About me section
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} className={classes.aboutMeImg}>
          <Typography variant="h1" align="left">
            IMG
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
