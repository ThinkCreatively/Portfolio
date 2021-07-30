import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import useStyles from './HomeStyles.jsx';

const Home = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.homeContainer}>
      <Paper>
        HOME
      </Paper>
    </Grid>
  );
};

export default Home;
