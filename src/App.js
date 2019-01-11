import React, { Component } from 'react';

import { Provider } from 'react-redux';

import configureStore from '@redux/store';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="AppWrapper">
          <h1>trevorKIRPAUL</h1>
        </div>
      </Provider>
    );
  }
}

export default App;
