import React from 'react';
import ReactDOM from 'react-dom';
import {Connect} from 'react-redux';

import App from './components/App';

import store from './store/store.js';
// TODO: refactor this out of this file
import './assets/index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// For HMR reloading TODO: comment out for production version
if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    ReactDOM.render(
      <NextApp />,
      document.getElementById('root')
    );
  });
}