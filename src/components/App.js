import React, { Component } from 'react';
import {Provider} from 'react-redux';
import Word from './Word';
import CurrentWord from './CurrentWord';
import LineContainer from './Line';
import store from '../store/store.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Porthole</h2>
        </div>
        <LineContainer />
      </div>
    );
  }
}

class AppContainer extends Component {
  render() {
    return (
      <Provider store={store} >
        <App />
      </Provider>
    );
  }
}

export default AppContainer;
