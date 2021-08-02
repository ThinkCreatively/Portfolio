import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import useStyles from './BlogStyles.jsx';
import Header from '../Header.jsx';

const Blog = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.blogContainer}>
      <Header />
    </Grid>
  );
};

export default Blog;
