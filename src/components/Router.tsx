/* eslint-disable no-unused-expressions */
// import PropTypes from 'prop-types';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Feed from '../pages/Feed';
import Authentication from '../pages/Authentication';

const LoggedInRoutes = () => (
  <>
    <Route exact path="/" component={Feed} />
  </>
);

const LoggedOutRoutes = () => (
  <>
    <Route exact path="/" component={Authentication} />
  </>
);
type AppProps = {
  isLoggedIn:boolean
};
const AppRouter = ({ isLoggedIn }:AppProps) => (
  <Router>
    <Switch>{isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}</Switch>
  </Router>
);

export default AppRouter;
