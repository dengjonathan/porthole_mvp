import {List, Map} from 'immutable';

export const INITIAL_STATE = Map({
  articles: List(),
  currentIndex: 0,
  currentArticle: null
});

export default INITIAL_STATE;