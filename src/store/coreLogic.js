import {List, Map} from 'immutable';
import * as Promise from 'bluebird';

//FIXME: for some reason readFile in certain cricumstances is undefined
// import {readFile} from 'fs';
// const readFileAsync = Promise.promisify(readFile);

//stub to rebuild when actually getting articles from database
// export function getArticles () {
//   return readFileAsync('../../articles.json');
//};

export function nextWord(state) {
  const currentIndex = state.get('currentIndex');
  return state.set('currentIndex', currentIndex + 1);
}

export function changeArticle(state, index) {
  return state.set('articleIndex', index);
}

export function loadArticles(state, articles) {
  return state.set('articles', List.of(articles));
};

export function pause(state) {
  return state.set('paused', true);
}

export function unPause(state) {
  return state.set('paused', false);
}
