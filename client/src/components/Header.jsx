import React from 'react';
import { Grid, Button, Typography } from '@material-ui/core';
import {
  BrowserRouter as Router, Route, Link, Switch, withRouter
} from 'react-router-dom';
import globalUseStyles from './GlobalStyles.jsx';

const Header = () => {
  const globalClasses = globalUseStyles();

  return (
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
          <Grid item xs={12} md={5} className={globalClasses.tab}>
            <Link to="/blog">
              <Button>
                Blog
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
