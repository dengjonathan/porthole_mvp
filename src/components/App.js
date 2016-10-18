import React, { Component } from 'react';
import {Provider} from 'react-redux';

import PortholeContainer from './Porthole';
import ArticlesContainer from './Articles';
import Footer from './Footer';
import store from '../store/store.js';

import '../assets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 className="App-intro">Porthole</h2>
          <Footer />
        </div>
        <Provider store={store} >
          <ArticlesContainer />
        </Provider>
        <Provider store={store} >
          <PortholeContainer />
        </Provider>
      </div>
    );
  }
}

export default App;
