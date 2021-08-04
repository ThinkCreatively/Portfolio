import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import useStyles from './HomeStyles.jsx';
import Header from '../Header.jsx';

const Home = () => {
  const classes = useStyles();
  return (
    // <Grid container className={classes.homeContainer} direction="column">
    //   <Header />
    //   <Grid container className={classes.aboutMe}>
    //     <Grid item xs={12} md={8} className={classes.aboutMeParagraph}>
    //       <Typography variant="h1" align="left">
    //         About me section
    //       </Typography>
    //     </Grid>
    //     <Grid item xs={12} md={4} className={classes.aboutMeImg}>
    //       <Typography variant="h1" align="left">
    //         IMG
    //       </Typography>
    //     </Grid>
    //   </Grid>
    // </Grid>
    <Grid container className={classes.homeContainer}>
      <Grid item xs={12} md={1} className={classes.scroll}>
        Left Scroll
      </Grid>
      <Grid item xs={12} md={10} className={classes.homeContainer}>
        Body
      </Grid>
      {/* <Grid item xs={12} md={10} className={classes.homeContainer}>
        <Grid container>
          <Grid item xs={12} md={4} className={classes.techStackContainer}>
            Design
          </Grid>
          <Grid item xs={12} md={4} className={classes.techStackContainer}>
            Programming Languages
          </Grid>
          <Grid item xs={12} md={4} className={classes.techStackContainer}>
            Front & Back
          </Grid>
        </Grid>
      </Grid> */}
      <Grid item xs={12} md={1} className={classes.scroll}>
        Righ Scroll
      </Grid>
    </Grid>
  );
};

export default Home;
