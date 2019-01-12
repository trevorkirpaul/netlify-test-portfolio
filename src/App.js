import React, { Component } from 'react';

import { Provider } from 'react-redux';

import configureStore from '@redux/store';
import Router from './router';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
