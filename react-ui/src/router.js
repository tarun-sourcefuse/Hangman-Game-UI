import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux';

import Layouts from './layouts';

const routes = [
  {
    path: '/login',
    Component: lazy(() => import('./pages/login')),
    exact: true,
  },
  {
    path: '/game',
    Component: lazy(() => import('./pages/game')),
    exact: true,
  },
];

const mapStateToProps = ({ user }) => user;

const Router = () => {
  return (
    <BrowserRouter>
      <Layouts>
        <Switch location={location}>
          {routes.map(({ path, Component, exact }) => (
            <Route
              path={path}
              key={path}
              exact={exact}
              render={() => {
                return (
                  <div>
                    <Suspense fallback={null}>
                      <Component />
                    </Suspense>
                  </div>
                );
              }}
            />
          ))}
        </Switch>
      </Layouts>
    </BrowserRouter>
  );
};

export default connect(mapStateToProps)(Router);
