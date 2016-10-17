import {List, Map} from 'immutable';

/*
State Schema:
store: {
  articles: [Article, Article, Article],
  currentIndex: num,
  currentArticle: num
}
 */

export function nextWord(state) {
  const currentIndex = state.get('currentIndex');
  return state.set('currentIndex', currentIndex + 1);
}

export function changeArticle(state, index) {
  return state.set('articleIndex', index);
}

export function loadArticles(state, articlesArray) {

}