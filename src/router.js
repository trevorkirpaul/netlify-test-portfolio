import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from 'containers/Header';
import Home from 'containers/Home';

const Router = () => (
  <BrowserRouter>
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  </BrowserRouter>
);

export default Router;
