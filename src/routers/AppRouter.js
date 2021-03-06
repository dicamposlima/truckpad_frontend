import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DriversListPage from '../components/DriversListPage';
import DriverAddPage from '../components/DriverAddPage';
import DriverEditPage from '../components/DriverEditPage';
import NotFoundPage from '../components/NotFoundPage';
import Routes from './Routes';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Routes path="/" component={DriversListPage} exact={true} />
        <Routes path="/create" component={DriverAddPage} />
        <Routes path="/edit/:id" component={DriverEditPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
