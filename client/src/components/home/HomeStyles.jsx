import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  homeContainer: {
    border: '2px solid black'
  },
  techStackContainer: {
    width: '30%',
    border: '2px solid red'
  },
  scrollLeft: {
    position: 'fixed'
  },
  scrollRight: {
    position: 'fixed'
  },
  tabsContainer: {
    border: '2px solid black'
  },
  tab: {
    border: '2px solid black',
    textAlign: 'center'
  },
  aboutMe: {
    border: '2px solid black',
    height: '80vh'
  },
  aboutMeParagraph: {
    border: '2px solid black'
  },
  aboutMeImg: {
    border: '2px solid black'
  }
}));

export default useStyles;
