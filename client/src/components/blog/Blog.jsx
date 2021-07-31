import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import useStyles from './BlogStyles.jsx';

const Blog = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.blogContainer}>
      <Paper>
        Blog
      </Paper>
    </Grid>
  );
};

export default Blog;
