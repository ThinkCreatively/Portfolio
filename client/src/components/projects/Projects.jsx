import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import useStyles from './ProjectStyles.jsx';
import Header from '../Header.jsx';

const Projects = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.projectContainer}>
      <Header />
    </Grid>
  );
};

export default Projects;
