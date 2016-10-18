import React, { Component } from 'react';
import {Provider} from 'react-redux';

import PortholeContainer from './Porthole';
import store from '../store/store.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Porthole</h2>
        </div>
        <Provider store={store} >
          <PortholeContainer />
        </Provider>
      </div>
    );
  }
}

export default App;
