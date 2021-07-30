import React from 'react';
import {
  BrowserRouter as Router, Route, Link, Switch, withRouter
} from 'react-router-dom';
import useStyles from './GlobalStyles.jsx';
import Home from './home/Home.jsx';
import Projects from './projects/Projects.jsx';

const App = () => {
  const classes = useStyles();
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/projects" exact>
            <Projects />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
