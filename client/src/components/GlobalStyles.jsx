import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const globalUseStyles = makeStyles(() => ({
  outtermostGrid: {
    border: '2px solid black'
    // backgroundColor: '#1ABC9C'
  },
  header: {
    //
  },
  tabsContainer: {
    alignSelf: 'center'
  },
  tab: {
    textAlign: 'center'
  },
  tabButton: {
    width: '100%',
    border: '2px solid red'
  },
  root: {
    background: 'linear-gradient(45deg, #1ABC9C 30%, #5ED0B9 90%)',
    color: 'white',
    height: 48,
    width: '100%'
  }
  /*
  Colors:
  #1ABC9C - darker aqua green
  */
}));

export default globalUseStyles;
