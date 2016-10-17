import { createStore } from 'redux';
import reducer from './reducer';

export const store = makeStore();

store.dispatch({
  type: 'SET_ARTICLES',
  articles: require('./entries.json')
});

console.log(store.getState());