import React from 'react';
import ReactDOM from 'react-dom';
import {Connect} from 'react-redux';

import AppContainer from './components/App';
import store from './store/store.js';

// TODO: refactor this out of this file
import './index.css';

ReactDOM.render(
  <AppContainer />,
  document.getElementById('root')
);

setInterval(()=> {
  store.dispatch({type: 'NEXT_WORD'});
}, store.getState().get('speed'));

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    ReactDOM.render(
      <NextApp />,
      document.getElementById('root')
    );
  });
}