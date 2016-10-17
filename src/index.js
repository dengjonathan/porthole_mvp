import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import {store} from './store/store.js';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    ReactDOM.render(
      <NextApp />,
      document.getElementById('root')
    );
  });
}