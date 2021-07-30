import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import useStyles from './ProjectStyles.jsx';

const Projects = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.projectContainer}>
      <Paper>
        PROJECTS
      </Paper>
    </Grid>
  );
};

export default Projects;
