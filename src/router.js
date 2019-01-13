import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from 'containers/Header';
import Home from 'containers/Home';
import SendEmail from 'containers/SendEmail';

const Router = () => (
  <BrowserRouter>
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/send-email" component={SendEmail} />
      </Switch>
    </>
  </BrowserRouter>
);

export default Router;
