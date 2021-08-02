import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import {
  BrowserRouter as Router, Route, Link, Switch, withRouter
} from 'react-router-dom';
import useStyles from './HomeStyles.jsx';
import globalUseStyles from '../GlobalStyles.jsx';

const theme = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
};

const Home = () => {
  const classes = useStyles();
  const globalClasses = globalUseStyles();
  return (
    <Grid container className={classes.homeContainer}>
      <Grid container className={globalClasses.header}>
        <Grid item xs={12} md={6} className={globalClasses.tabsContainer}>
          <Typography variant="h1">
            James Moore
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} className={globalClasses.tabsContainer}>
          <Grid container>
            <Grid item xs={12} md={5} className={globalClasses.tab}>
              <Button variant="contained" className={globalClasses.root}>
                <Link to="/projects">
                  Projects
                </Link>
              </Button>
            </Grid>
            <Grid item xs={12} md={5} className={classes.tab}>
              <Link to="/blog">
                <Button>
                  Blog
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
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
